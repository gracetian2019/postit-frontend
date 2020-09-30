import React from 'react';
import PostCard from '../components/post_components/PostCard';
import CommentsContainer from './CommentsContainer'
import NewPostForm from '../components/post_components/NewPostForm';
import Loader from '../components/help_components/Loader';
import  { Link, Route, Switch, Redirect } from 'react-router-dom';


class PostContainer extends React.Component{
  state ={
    posts: [], 
    loading: true
  }


  clickedPost = (id) => {
    this.setState({
      selectedPost: id
    })
  }


  goBackToPosts = () => {
    this.setState({
      selectedPost: null
    })
  }

  likeNum = (id) => {
          //console.log("cliked likes", id)
      fetch(`http://localhost:3000/api/v1/posts/${id}/likes`,{
          method: "PATCH"
      })
      .then(res=>res.json())
      .then(newObj => {
          let newPosts = this.state.posts.map(post=>{if(post.id===id){
              return newObj
          }else{
              return post
          }
      })
      this.setState({
          posts: newPosts
      })
      })
  }

  renderCards=()=> {
    let posts = this.state.posts.filter(post => post.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    return posts.map((post) => {return <PostCard key={post.id} likeNum={this.likeNum} clickedPost={this.clickedPost} post={post}/>})
  }

  componentDidMount() {
      fetch("http://localhost:3000/api/v1/posts")
      .then(res => res.json())
      .then(data =>{
        this.setState({
            posts: data,
            loading: false
        })
    })
  }


  newPostState = newPost =>{
      const updatedPost = [newPost, ...this.state.posts]
      this.setState({
          posts: updatedPost
    })
  }



  addComment = (postId, newComment) => {
    const updatedPost = {...this.state.posts.find(post => post.id === postId)}
    updatedPost.comments = [...updatedPost.comments, newComment]


  const newPosts = this.state.posts.map(post => {
    if(post.id === postId){
      return updatedPost
    } else {
      return post
    }
    })

    this.setState({
    posts: newPosts
    })
  }


  findDeletedComment=(postId,commentId)=>{
    const updatedPost = {...this.state.posts.find(post => post.id === postId)}
    let filteredComments = updatedPost.comments.filter((singleComment)=> {return singleComment.id !== commentId})
    updatedPost.comments = filteredComments

    const newPosts = this.state.posts.map(post => {
      if(post.id === postId){
        return updatedPost
      } else {
        return post
      }
    })

    this.setState({
      posts: newPosts
    })

  }


  deleteComment = (postId, commentId) => {
    const deleteConfig = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    }
    }
    fetch(`http://localhost:3000/api/v1/comments/${commentId}`, deleteConfig)
    .then(_ => {
    //console.log("deleted",_)
    this.findDeletedComment(postId, commentId)
    }).catch(err => console.log(err));
  }


  render(){
    if(this.state.loading){
      return (<div> <Loader />Loading ...</div>)
    } 
    else{
      return(
        <Switch>
        <Route path="/mainpage/:id" render={(routerProps)=>{
        
        const getPost = this.state.posts.find( post => post.id === parseInt(routerProps.match.params.id))
    
        if(getPost){
    
          // console.log("postContainer", this.props.currentUser)
    
          return(
            <div>    
              <Link className="nav-link" to='/mainpage'><label className="go-back-label" onClick={this.goBackToPosts}>Go Back</label></Link>     
              <PostCard likeNum={this.likeNum}  post={getPost}>
                <CommentsContainer  
                  deleteComment={ this.deleteComment} 
                  addComment={this.addComment} 
                  postId={getPost.id} 
                  comments={getPost.comments} 
                  currentUser={this.props.currentUser} />
              </PostCard>
            </div>
          )}
        else{
          return(< Redirect to='/'/> )
        }}}/>
        <Route path='/mainpage' render={()=>{
          return (
            <div className="post-container">
              {this.props.currentUser ? ( 
                <div className="new-post-form-container">
                {/* {console.log(this.props)} */}
                <h1 className="new-post-headline">Share your feelings</h1>
                <NewPostForm 
                  newPostState={this.newPostState} 
                  currentUser={this.props.currentUser}/>
                </div>) : (null)}      {/* need change null to new redirect */}   
                {this.renderCards()}
            </div>
          )
        }}/>
    </Switch>
    )}
  }
}


export default PostContainer

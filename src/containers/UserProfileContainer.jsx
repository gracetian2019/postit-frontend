import React from 'react';
import PostCard from '../components/post_components/PostCard';
//import CommentsContainer from './CommentsContainer';
class UserProfileContainer extends React.Component{

    state ={ posts: [] }

    renderCards(){
           return this.state.posts.map(post => {
               return <PostCard post={post} />})
       }

    fetchUserPosts=()=>{
    if(this.props.currentUser.id){ fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/posts`)
    .then(res => res.json())
    .then(data => 
        {
        debugger
        this.setState({
            posts: data
        })
    }
    ) }
      
    }
render(){
    return (
        
    <div className="user-profile-wrapper">
        
        <button className="user-profile-btn" onClick={this.fetchUserPosts}> Click Here To View Your Own Posts</button>
        
        {/* {
            this.renderCards()
        } */}
    </div>
    
)
}
      

}
export default UserProfileContainer
import React from 'react';
import Emoji from '../help_components/Emoji';
import { Link} from 'react-router-dom';

class PostCard extends React.Component {

    timeCacu(time){
        let hours = Math.floor((Date.now() - new Date(time)) / (1000*60*60))

        if (hours > 24){
          return Math.floor(hours/24) + " days"
        } else {
          return hours + " hours"
        }
    }


    handleClick=()=>{
        if(this.props.clickedPost){
            this.props.clickedPost(this.props.post.id)
        }
    }



    render(){
  
      //console.log(this.props.post.title)
  
       let {title, content, created_at, author_name, likes, comments, id} = this.props.post
  
      return (
        <div >
          <div className="post-card-div" >

            <div onClick={this.handleClick}>

              <Link className="post-title" to={`/mainpage/${id}`}>
                <h2>{title}</h2>
              </Link>
              
              <p className="content-text">{content}</p>

              <p> <span>{author_name}</span> | {this.timeCacu(created_at)} ago</p>

              <div className="like-cmt-wrapper">
                <div>
                  <p>This post has <Emoji label="panada" symbol="✨"/> {comments.length > 1 ? <span>{comments.length} Comments</span> : <span>{comments.length} Comment </span> }</p>
                  <div >
                  <button className="like-btn" onClick={() => {this.props.likeNum(id)}}><Emoji label="panada" symbol="👍"/> {likes > 1 ? <span>{likes} Likes</span> : <span>{likes} Like</span>}</button>
                </div>
                </div>
              </div >

            </div> 

          </div>

          <div className="cmt-child">
            {this.props.children}
          </div>

        </div>

          
            

      )
    }
  }

export default PostCard
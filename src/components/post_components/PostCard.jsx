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
        <div className="post-card" >
            <div onClick={this.handleClick}>
              <Link to={`/mainpage/${id}`}>
              <p>Advice: <strong>{title} </strong> </p>
              </Link>
              <p>Content:<strong>{content}</strong></p>
              <p>Posted by | <span>{author_name}</span> | {this.timeCacu(created_at)} ago</p>
            <div>
              <span>This post has <Emoji label="panada" symbol="✨"/> {comments.length} Comments </span> 
            <div >
              <button onClick={() => {this.props.likeNum(id)}}><Emoji label="panada" symbol="👍"/> <span>{likes}LIKE</span></button>
            </div>
            </div>
              {this.props.children}
            </div> 
        </div>
      )
    }
  }

export default PostCard
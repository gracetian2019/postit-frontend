import React from 'react';
import Emoji from '../help_components/Emoji';

function CommentCard(props){

   function timeCacu(time){
    let hours = Math.floor((Date.now() - new Date(time)) / (1000*60*60))

    if (hours > 24){
      return Math.floor(hours/24) + " days"
    } else {
      return hours + " hours"
    }
  }


  
  const { username, content, created_at, id, user_id, post_id } = props.comment

  //console.log( "commentcard",this.props.currentUser)

  function displayDeleteButton(){
    if(props.currentUser && props.currentUser.id === user_id ) {
      //console.log( "commentcard", props.currentUser)
      return <button onClick={() => {props.deleteComment(post_id, id)}}>Delete</button>
    }
  }
 
  


  return (
    <div className="comment-card">
        <h3 className="content-cmt">{content}</h3>
        <span > <span className="username-icon">{username} </span> <span className="user-icon"><Emoji  label="panada" symbol="🐼"/>Commented</span>  <Emoji label="panada" symbol="🔊"/>{timeCacu(created_at)} ago</span>
        {/* <span > {username} <Emoji className="user-icon" label="panada" symbol="🐼"/> Commented <Emoji label="panada" symbol="🔊"/>{timeCacu(created_at)} ago</span> */}
        {displayDeleteButton()}
    </div>
  )
}

export default CommentCard
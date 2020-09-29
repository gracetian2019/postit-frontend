import React from 'react'
import CommentCard from '../components/comment_components/CommentCard'
import NewCommentForm from '../components/comment_components/NewCommentForm'

function CommentsContainer(props){

  function renderComments(){
    //console.log(props)
  return [...props.comments].reverse().map(comment => {
    return( 
      <CommentCard 
        key={comment.id} 
        comment={comment} 
        commentId={comment.id} 
        comments={props.comments} 
        deleteComment={props.deleteComment} 
        currentUser={props.currentUser}
      />
    )
  })
  }
       
  if(props.currentUser){

    return ( 
      <div>
            <NewCommentForm 
            postId={props.postId} 
            addComment={props.addComment} 
            currentUser={props.currentUser}
            />
             {renderComments() }
      </div>)
  }

  else {
    return( renderComments())
  }
        
      
}

export default CommentsContainer
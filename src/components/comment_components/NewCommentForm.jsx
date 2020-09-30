import React from 'react';

class NewCommentForm extends React.Component{

  state = {
    content: "",
  }


  handleChange = (evt) =>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
   if(this.props.currentUser){
    this.createNewCommentFetch()
   }else{
    this.setState({
        content:""
    });
    alert ("please log in")
    
   } 
}


  createNewCommentFetch = () => {
    //evt.preventDefault()

    fetch(`http://localhost:3000/api/v1/posts/${this.props.postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({content: this.state.content, user_id: this.props.currentUser.id })
    })
    .then(res => res.json())
    .then(newComment => {

      this.props.addComment(this.props.postId, newComment)

    })

    this.setState({
      content: ""
    })
  }

  render(){
    //console.log("newComment",this.props.currentUser)
    return (
      <div className="comment-form">
        <textarea onChange={this.handleChange} name="content" value={this.state.content} placeholder="say something nice to this wisdom advisor" />
        <div className="">
          <button className="signup cmt-btn" onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    )
  }
  
}

export default NewCommentForm
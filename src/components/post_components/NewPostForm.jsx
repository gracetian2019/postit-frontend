import React from 'react';

class NewPostForm extends React.Component{
    state = {
      title: "",
      content:"",
      user: this.props.currentUser,
      likes: 0,
    }

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        //debugger
       if(this.props.currentUser){
        this.createNewPostFetch()
       }else{
        this.setState({
            title: "",
            content:""
        });
        alert ("please log in")
        
       } 
    }

    createNewPostFetch() {
        fetch("http://localhost:3000/api/v1/posts", {method: "POST",
            headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json'
            },

            body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(newPost => {
                //console.log(newPost)
                //debugger
            this.props.newPostState(newPost)
            this.setState({
                title: "",
                content:""
            });
            })
    }

    componentDidMount(){
        if (this.props.currentUser) {
            this.setState({
                ...this.state, 
                user_id: this.props.currentUser.id
            })
        }
    }

    render(){
        return(
        <div className="feeling-form">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='title'>Feeling:</label>
        <textarea className="feeling-input"type='text' name='title' value={this.state.title}  onChange={this.handleChange} />
        <label className="content-label"htmlFor='content'>Content:</label>
        <textarea className="content-input"type='text' name='content' value={this.state.content}  onChange={this.handleChange} />
        <input className="feeling-submit-btn nav-btn"type="submit" value="Submit" />
        </form>
        </div>
        )
    }



}

export default NewPostForm
import React from 'react';

class Signup extends React.Component{
    state={
        username:'',
        password: ''
    }
   
    handleChange =(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
          })
          .then(res => res.json())
          .then(res=>{
              if(res.message){
                 alert(res.message) 
              }else{
                 this.props.setUser(res) 
              }
          })
        }
    


    render(){
    return (
        <div className="signup-wrapper">

        
        <div className="sign-up-div">
        
            <h1 className="signup-title">Sign up Here</h1>
            
            <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
            <label htmlFor="username">Username*</label>
            <input className="username-input" type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username" />
            <label htmlFor="password">Password*</label>
            <input className="username-input" type="password" autoComplete="off" value={this.state.password} onChange={this.handleChange}name="password" placeholder="password"/>
            </div>
            
             <p className="signup-text">Motivate yourself and others from now on!</p>
             <button className="nav-btn signup signup-btn" type="submit">Sign up</button>
             </form>
        </div>
        </div>
    )
  }
}

export default Signup
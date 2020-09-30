import React from 'react';
import{ NavLink } from 'react-router-dom';

class Login extends React.Component{
     state={
         username: "",
         password: ""
     }

     handleChange =(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        //debugger
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
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
        <div className="login-div">

            <h1>Welcome to PostIt</h1>
            <p>Write inspiration post and comment to encourage people</p>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username*</label>
            <input type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange}name="username"/>
            <label className="password-label" htmlFor="password">Password*</label>
            <input type="password" autoComplete="off" value={this.state.password} onChange={this.handleChange} name="password"/>
            <button className="signup nav-btn login-2-btn" type="submit">Log in</button>
            </form>
            <h3>New to PostIt?</h3>
            <NavLink className="nav-link" to='/signup' ><p>Create an Account</p></NavLink>
        </div>
    )
}
}

export default Login
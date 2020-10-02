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
        <div className="login-wrapper">
            <div className="login-div">

                <h1>Welcome to PostIt</h1>
                <p>Write inspirational posts and comments to encourage people.</p>
                <form onSubmit={this.handleSubmit}>
                <div className="user-div">
                <label htmlFor="username">Username*</label>
                <input  className="user-input" type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange}name="username"/>
                </div>
                <div className="password-label">
                <label  htmlFor="password">Password*</label>
                <input className="ps-input" type="password" autoComplete="off" value={this.state.password} onChange={this.handleChange} name="password" />
                </div>


                <button className="signup nav-btn login-2-btn" type="submit">Log in</button>
                </form>
                <NavLink className="account-link" to='/signup' >Create an Account</NavLink>

                </div>
        </div>
        
    )
}
}

export default Login
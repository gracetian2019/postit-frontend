import React from 'react';

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
        <div>

            <h1>Log in</h1>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange}name="username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" autoComplete="off" value={this.state.password} onChange={this.handleChange} name="password"/>
            <button type="submit">Log in</button>
            </form>
        </div>
    )
}
}

export default Login
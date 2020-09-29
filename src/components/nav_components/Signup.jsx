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
        
        <div>
            <h1>Sign up</h1>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" autoComplete="off" value={this.state.password} onChange={this.handleChange}name="password" placeholder="password"/>
             <p>Your information is safe with us!</p>
             <button type="submit">Sign up</button>
             </form>
        </div>
    )
  }
}

export default Signup
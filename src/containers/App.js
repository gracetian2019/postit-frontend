import React, {  Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Login from '../components/nav_components/Login';
import Signup from '../components/nav_components/Signup';
import CourageContainer from './CourageContainer';
import MainContainer from './MainContainer';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import WelcomePage from '../pages/WelcomePage.jsx';

import { Route, Switch,Redirect } from 'react-router-dom';

class App extends Component {
    state = {
        currentUser: null,
        view: 'full',
        searchTerm: ''
    }

   setUser=(user)=>{
     //debugger
     this.setState({
        currentUser: user},()=>{
        localStorage.user_id=user.id
        this.props.history.push("/mainpage")})
   }
   

  handleSearchChange = (evt) => {
      this.setState({
          searchTerm: evt.target.value
      })
  }

  logout=()=>{
    this.setState(
      {currentUser: null},
      ()=>{
        localStorage.removeItem("user_id")
        this.props.history.push("/welcome")
    })
  }

  


  render() {
      //console.log('app', this.state.currentUser)
      return ( 
          <div className = "App" >
          <NavBar currentUser={this.state.currentUser}searchTerm = { this.state.searchTerm }
          handleSearchChange = { this.handleSearchChange}
          logout={this.logout}
          /> 
          
        <Switch>
          <Route path='/login' render={()=><Login setUser={this.setUser}/>} />
          <Route path='/signup' render={()=><Signup setUser={this.setUser}/>} />
          <Route path='/mainpage' render={(routerProps)=> 
          <div>
          <CourageContainer />
          <MainContainer view = { this.state.view } searchTerm = { this.state.searchTerm } routerProps={routerProps} currentUser={this.state.currentUser}/> 
          </div>
          }/>
          <Route exact path='/welcome' render={()=><WelcomePage />} />
          <Route path="/404" render={()=><NotFoundPage />}/>
          <Redirect to="/404" />
          </Switch>
        </div>
      );
  }


}

export default App;
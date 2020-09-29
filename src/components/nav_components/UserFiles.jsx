import React from 'react';
import { NavLink } from 'react-router-dom';

function UserFiles(props){
  return (
    <div className="user-files">
      
      { !props.currentUser?
     <NavLink className="nav-link" to='/login' > <button className="nav-btn login">Login</button></NavLink>
     : <button className="nav-btn signup"  onClick={props.logout}>LOG OUT</button>
      }
      
     <NavLink className="nav-link" to='/signup' > <button className="nav-link nav-btn signup">Sign up</button></NavLink>
     {props.currentUser && <button>{props.currentUser.username}</button>}
    </div>
  )
}

export default UserFiles
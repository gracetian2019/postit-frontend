import React from 'react';
import Emoji from '../help_components/Emoji';
import { NavLink} from 'react-router-dom';



function UserFiles(props){
 
  return (
    <div className="user-files">
      {props.currentUser && <NavLink to='/userprofile'><button className="user-btn">{props.currentUser.username.toUpperCase()}</button></NavLink>}
      
      { !props.currentUser?
     <NavLink className="nav-link" to='/login' > <button className="nav-btn login"><Emoji className="write-emoji" label="write" symbol="📝"/>Write</button></NavLink>
     : <button className="nav-btn"  onClick={props.logout}>Log out</button>
      }
       
     {!props.currentUser && <NavLink className="nav-link" to='/signup' > <button className="nav-link nav-btn signup">Sign up</button></NavLink>}
    
    </div>
  )
}

export default UserFiles
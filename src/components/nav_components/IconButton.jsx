import React from 'react';
import { Link } from 'react-router-dom';

function IconButton(){
  return (
  <Link className="nav-link"
  to='/welcome'>
    <div className="icon-button">
      <h3 className="icon-text">Post IT</h3> 
    </div>
  </Link>
  )
}

export default IconButton
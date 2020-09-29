import React from 'react';
import IconButton from '../components/nav_components/IconButton';
import Search from '../components/nav_components/Search';
import UserFiles from '../components/nav_components/UserFiles';



function NavBar(props){
  return (
    <div className="navbar">
        <IconButton />
        <Search  handleSearchChange={props.handleSearchChange} searchTerm={props.searchTerm}/>
        <UserFiles currentUser={props.currentUser} logout={props.logout}/>
    </div>
  )
}

export default NavBar
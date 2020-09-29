import React from 'react';
import PostContainer from './PostContainer';


function MainContainer(props){
    //console.log("main", props)
    return (
        
        <div className="main-container">
            
            <PostContainer searchTerm={props.searchTerm}  currentUser={props.currentUser} view={props.view}
            />
        </div>
    )
}

export default MainContainer;
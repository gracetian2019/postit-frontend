import React from 'react';
import CourageContainer from '../containers/CourageContainer'
import {Link} from 'react-router-dom';

function WelcomePage() {

    return(
        <div>

           <CourageContainer />
           <div className="home-page-cmt-box" >
               <div className="home-page-cmt-text">
               <Link className="nav-link share-thought" to='/mainpage'><h3>Share your thoughts with us.We'd love to listen! :)</h3></Link>
               </div>
           
           </div>
        </div>
    );

}

export default WelcomePage;
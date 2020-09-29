import React from 'react';
import CourageContainer from '../containers/CourageContainer'
import {Link} from 'react-router-dom';

function WelcomePage() {

    return(
        <div>
          This is Home page
           <CourageContainer />
           <Link to='/mainpage'><label>Read More and leave your comment</label></Link>
        </div>
    );

}

export default WelcomePage;
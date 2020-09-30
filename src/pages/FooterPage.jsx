import React from 'react';
import {Link} from 'react-router-dom';


function FooterPage() {

    return(
        <div>
            <hr></hr>
           This is Footer page
           <div>
               <h2>About us</h2>
               
               <Link to="/about" ><p>Who we are</p></Link>
           </div>
        </div>
    );

}

export default FooterPage;
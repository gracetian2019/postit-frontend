import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            {/* <img src={PageNotFound}  /> */}

            <p style={{textAlign:"center"}}>
             It looks like you're lost...
            <Link to="/welcome">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;
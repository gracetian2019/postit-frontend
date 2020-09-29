import React from 'react';
//import { render } from 'react-dom';

function Emoji(props){
 return(
 <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
 )
}

export default Emoji
import React from "react";
import imagen from '../../../persona.jpg';
import './singlechat.css';
const SingleChat = ({props}) => {
    return(
        <div className="singlechat">
            <img src={imagen} alt="persona"/>
            <h3>{props.name}</h3>
            <p>{props.lastchat}</p>
        </div>
    );
}

export default SingleChat;
import React from "react";
import imagen from '../../../persona.jpg';
import './singlechat.css';
const SingleChat = ({props}) => {
    return(
        <div className="singlechat">
            <div className="image-chat-container">
                <img src={imagen} alt="persona"/>
            </div>
            <div className="text-chat-container">
                <h3>{props.name}</h3>
                <p>{props.lastchat}</p>
            </div>
            
        </div>
    );
}

export default SingleChat;
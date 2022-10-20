import React from "react";
import SingleChat from "./chatsComponents/singlechat";
import ChatText from "./chatsComponents/chattext";
import './chat.css';
import './chatsComponents/singlechat.css';

const Chat = ({chats}) => {

    return(
        
        <div className="chat-container">
            <div className="singlechat-container">
                {chats.map((singlechatProps) => {
                    return(
                        <SingleChat props={singlechatProps}/>
                    );
                
                })}
            </div>
            <ChatText/>
        </div>
    );
    
}

export default Chat;
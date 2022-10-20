import React from "react";
import './inputField.css'

const InputCredentials = () => {
    return(
        <div className="credentials-container">
            <input type="text" className="credentials" placeholder="email"/>
            <input type="password" className="credentials" placeholder="password"/>
            <button type="submit" className="button-login"> Sign In</button>
        </div>
    );
}

export default InputCredentials;
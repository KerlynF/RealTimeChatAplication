import React from "react";
import './login.css';


const Login = ({children}) => {
    return(
        <div className="main-container-login">
            <div className="input-container">
                <h2>Real Time Chat</h2>
                <p>Log In</p>
                {children}
                <p>You don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
}

export default Login;
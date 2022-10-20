import React from "react";
import './login.css';


const Login = ({children, props}) => {
  return (
    <div className="main-container-login">
      <div className="input-container">
        <h2>{props.Title}</h2>
        <p>{props.subtitle}</p>
        {children}
        <p>{props.subtitleP}<a href={props.link}>{props.linkname}</a></p>
      </div>
    </div>
  );
}

export default Login;
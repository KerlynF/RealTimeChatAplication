import React from "react";
import Login from "../login/login";
import InputCredentials from "../login/loginComponents/inputField";

const Register = () => {

    const propsRegister = {
        Title: "Real Time Chat",
        subtitle: "Register",
        subtitleP: "Do you have an account? ",
        link: "/login",
        linkname: "Log In"
    }

    const inputProps = [
        {
            type: "text",
            placeholder: "display name"
        },
        {
            type: "text",
            placeholder: "email"
        },
        {
            type: "password",
            placeholder: "password"
        }
    ]
    return(
        <Login props={propsRegister}>
            <InputCredentials nameButton="Register" inputs={inputProps}/>
        </Login>
    );
}

export default Register;
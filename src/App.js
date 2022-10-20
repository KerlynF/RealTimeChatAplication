import React from "react";
import './App.css';
import Login from "./screens/login/login";
import InputCredentials from "./screens/login/loginComponents/inputField";

const App = () => {
    return(
        <React.Fragment>
            <Login>
                <InputCredentials/>
            </Login>
        </React.Fragment>
    );
}

export default App;
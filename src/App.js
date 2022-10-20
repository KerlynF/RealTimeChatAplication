import React from "react";
import './App.css';
import Login from "./screens/login/login";
import InputCredentials from "./screens/login/loginComponents/inputField";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./screens/signup/signup";
import Chat from "./screens/chats/chat";
const App = () => {
  const propsLogin = {
    Title: "Real Time Chat",
    subtitle: "Login",
    subtitleP: "You don't have an account? ",
    link: "/register",
    linkname: "Register"
  }


  const props1 = [
    {
        name: "Juan",
        lastchat: "Hola Carlos"
    },
    {
        name: "Maria",
        lastchat: "Hola Marta"
    },
    {
        name: "Adrian",
        lastchat: "Hola Juana"
    }
];


  const inputsLogin = [
    {
      type: "text",
      placeholder: "email"
    },
    {
      type: "password",
      placeholder: "password"
    }
  ];
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
              <Login props={propsLogin}>
                <InputCredentials nameButton="Log In" inputs={inputsLogin}/>
              </Login>
            }/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/chats" element={<Chat chats={props1}/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
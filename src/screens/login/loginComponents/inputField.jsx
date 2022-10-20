import React from "react";
import './inputField.css'

const InputCredentials = ({inputs, nameButton}) => {
  return (
    <div className="credentials-container">
      {inputs.map((input) => {
        return(
          <input type={input.type} className='credentials' placeholder={input.placeholder}></input>
        );
      })}
      {/* <input type="text" className="credentials" placeholder="email" />
      <input type="password" className="credentials" placeholder="password" /> */}
      <button type="submit" className="button-login">{nameButton}</button>
    </div>
  );
}

export default InputCredentials;
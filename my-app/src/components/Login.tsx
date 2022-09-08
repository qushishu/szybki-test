import React from "react";

import './Login.css';
import logo from '../assets/images/logo_transparent_1.png'

const Login = () => {
  return (
    <div className="white-box">
      <div className="teacher_login">
        Zaloguj jako nauczyciel
      </div>
      <img className="logo img-fluid" src={logo} alt="logo"/>
      <div className="Token">
        <h2>Token</h2>
      </div>
      <input type="text" id="text_token" placeholder="Token" required/>
      <input type="submit" value="Start"/>
    </div>
  );
}
export default Login
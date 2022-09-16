import React, { useState } from "react";
import './Login.css';
import logo from '../assets/images/logo_transparent_1.png'
import TokenLogin from "./TokenLogin";
import TeacherLogin from "./TeacherLogin";


const Login = () => {
  const toggleLogAsTeacher = () => {
    setLogAsTeacherState(!logAsTeacherState)
  }
  const [logAsTeacherState, setLogAsTeacherState] = useState(false);
  return (
    <div className="white-box">
      {logAsTeacherState ? <div style={{height:"20px"}}></div> :
        <div className="teacher_login" style={{width:"100%"}} onClick={toggleLogAsTeacher}>
          Zaloguj jako nauczyciel
        </div>}
      <img className="logo img-fluid" src={logo} alt="logo" />
      {logAsTeacherState ? <div>
        <TeacherLogin />
      </div> : <TokenLogin />}
      {logAsTeacherState ?<div>
        <button className="arrow" onClick={toggleLogAsTeacher}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor"
              className="bi bi-arrow-return-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </div> : null}
    </div>
  );
}
export default Login
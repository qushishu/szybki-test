import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const TeacherLogin = () => {
  let navigate = useNavigate()
  const navigateToForgotPassword = ()=>{
    navigate("/forgot-password")
  }
  const authorize = ()=>{
  //  API request
    setCorrectAuth(false)
  }
  const [correctAuth,setCorrectAuth] = useState(true)
  return (
    <div>
      <input type="text" id="login" placeholder="Login" required/>
      <input type="password" id="password" placeholder="Hasło" required/>
      <div className="forgot_password" onClick={navigateToForgotPassword}>
        Nie pamiętam hasła
      </div>
      <input type="submit" value="Zaloguj" onClick={authorize}/>
      {correctAuth ? <div>&nbsp;</div>: <div className="incorrect_data_label">Błędne dane logowania</div>}
    </div>
  )
}
export default TeacherLogin
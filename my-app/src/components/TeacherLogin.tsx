import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const auth = async (login: string, password: string) => {
  const endpoint = 'http://localhost:8080/loginy/auth?login=' + login + '&password=' + password;
  const data = await (await fetch(endpoint)).json();
  const teacherId: number = data;
  return teacherId;
}

const TeacherLogin = () => {
  let inputLogin = ''
  let inputPassword = ''
  let teacherId: number
  let navigate = useNavigate()
  const navigateToForgotPassword = () => {
    navigate("/forgot-password")
  }

  async function Authorize() {
    //  API request
    teacherId = await auth(inputLogin, inputPassword)
    if (teacherId > 0) {
      setCorrectAuth(true)
      // navigate("")
    }
    setCorrectAuth(false)
  }

  const UpdateLogin = (login: any) => {
    inputLogin = login.target.value
  }

  const UpdatePassword = (password: any) => {
    inputPassword = password.target.value
  }

  const [correctAuth, setCorrectAuth] = useState(true)

  return (
    <div>
      <input type="text" id="login" placeholder="Login" required onChange={login => UpdateLogin(login)} />
      <input type="password" id="password" placeholder="Hasło" required onChange={password => UpdatePassword(password)} />
      <div className="forgot_password" onClick={navigateToForgotPassword}>
        Nie pamiętam hasła
      </div>
      <input type="submit" value="Zaloguj" onClick={Authorize} />
      {correctAuth ? <div>&nbsp;</div> : <div className="incorrect_data_label">Błędne dane logowania</div>}
    </div>
  )
}
export default TeacherLogin
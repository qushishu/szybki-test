import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import TeacherPanel from "./TeacherPanel/TeacherPanel";


const auth = async (login: string, password: string) => {
  const endpoint = 'http://localhost:8080/loginy/auth?login=' + login + '&password=' + password;
  const data = await (await fetch(endpoint)).json();
  const teacherId: number = data;
  return teacherId;
}

const TeacherLogin = () => {
  const [inputLogin, setInputLoggin] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  let navigate = useNavigate()
  const navigateToForgotPassword = () => {
    navigate("/forgot-password")
  }

  async function Authorize() {
    //  API request
    let temp = await auth(inputLogin, inputPassword)
    if (temp > 0) {
      setCorrectAuth(true);

      navigate('/teacher-panel/' + temp)
      // navigate('/teacher-panel', { state: { teacherId: 1 } })
    }
    setCorrectAuth(false)
  }
  const [correctAuth, setCorrectAuth] = useState(true)

  return (
    <div>
      <input type="text" id="login" placeholder="Login" required onChange={login => setInputLoggin(login.target.value)} />
      <input type="password" id="password" placeholder="Hasło" required onChange={password => setInputPassword(password.target.value)} />
      <div className="forgot_password" onClick={navigateToForgotPassword}>
        Nie pamiętam hasła
      </div>
      <input type="submit" value="Zaloguj" onClick={Authorize} />
      {correctAuth ? <div>&nbsp;</div> : <div className="incorrect_data_label">Błędne dane logowania</div>}
    </div>
  )
}
export default TeacherLogin
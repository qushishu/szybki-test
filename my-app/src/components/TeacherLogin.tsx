import React from "react";

const TeacherLogin = () => {
  return (
    <div>
      <input type="text" id="login" placeholder="Login" required/>
      <input type="password" id="password" placeholder="Hasło" required/>
      <div className="forgot_password">
        Nie pamiętam hasła
      </div>
      <input type="submit" value="Zaloguj"/>
    </div>
  )
}
export default TeacherLogin
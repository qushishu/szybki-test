import React, {useState} from "react";

const TokenLogin = () => {
  const authorize = ()=>{
    //  API request
    setCorrectAuth(false)
  }
  const [correctAuth,setCorrectAuth] = useState(true)

  return (
    <div>
      <div className="Token">
        <h2>Token</h2>
      </div>
      <input type="text" id="text_token" placeholder="Token" required/>
      <input type="submit" value="Start" onClick={authorize}/>
      {correctAuth ? <div>&nbsp;</div>: <div className="incorrect_data_label">Nieprawidłowy token</div>}
    </div>
  )
}
export default TokenLogin
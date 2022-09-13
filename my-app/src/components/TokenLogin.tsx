import React, { useState,useRef } from "react";
import { getTests,Token } from "../API";
import { useNavigate } from "react-router-dom";
const TokenLogin = () => {
  let navigate=useNavigate();

  const authorize = async() => {
    //  API request
    console.log(token);
    const testy:Token[]= await getTests();
    for(let i=0;i<testy.length;i++){
      if(token == testy[i].token){
        setCorrectAuth(true);
        navigate('/test-solving', { state: { id: testy[i].id } });
        break;
      }
    }

    setCorrectAuth(false)
  }

  function getToken(val: React.ChangeEvent<HTMLInputElement>){
    setToken(val.target.value);
  }
  const [correctAuth, setCorrectAuth] = useState(true)
  const [token, setToken] = useState('');

  const inputRef = useRef(null);


  return (
    <div>
      <div className="Token">
        <h2>Token</h2>
      </div>
      <input type="text" id="text_token" placeholder="Token" onChange={getToken} required />
      <input type="submit" value="Start" onClick={authorize} />
      {correctAuth ? <div>&nbsp;</div> : <div className="incorrect_data_label">Nieprawidłowy token</div>}
    </div>
  )
}
export default TokenLogin
import React, { useState, useRef } from "react";
import { getTests, Test, Token } from "../API";
import { useNavigate } from "react-router-dom";
const TokenLogin = () => {
  let navigate = useNavigate();

  const authorize = async () => {
    //  API request
    console.log(token);
    const testy: Test[] = await getTests();
    const indeks: string = token.slice(0, 6)
    const testToken: string = token.slice(6)
    for (let i = 0; i < testy.length; i++) {
      console.log(testy[i].dataZakonczenia.toLocaleString())
      console.log(new Date().toLocaleString())
      if (testToken == testy[i].token && testy[i].czyAktywny && testy[i].dataZakonczenia.toLocaleString()>new Date().toLocaleString()) {
        setCorrectAuth(true);
        navigate('/test-solving', { state: { id: testy[i].id, indeks: indeks } });
        break;
      }
    }

    setCorrectAuth(false)
  }

  function getToken(val: React.ChangeEvent<HTMLInputElement>) {
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
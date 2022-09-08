import React from "react";

const TokenLogin = () => {
  return (
    <div>
      <div className="Token">
        <h2>Token</h2>
      </div>
      <input type="text" id="text_token" placeholder="Token" required/>
      <input type="submit" value="Start"/>
    </div>
  )
}
export default TokenLogin
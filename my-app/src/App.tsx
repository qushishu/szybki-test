import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? null : <Navigate replace to="/login"/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

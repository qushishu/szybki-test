import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TestCreating from './components/TestCreating';
import TestSolving from './components/TestSolving';

import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import CreateQuestionCard from './components/CreateQuestionCard';
import QuestionCard from './components/QuestionCard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? null : <Navigate replace to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="test-solving" element={<TestSolving />} />
          <Route path="test-creating" element={<TestCreating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

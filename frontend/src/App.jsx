import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import EmailVerify from "./pages/emailVerify";
import Home from "./pages/home";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verify" element={<EmailVerify />} />
      </Routes>
    </div>
  );
};

export default App;

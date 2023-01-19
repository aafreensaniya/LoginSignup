import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassWord } from "../Components/ForgotPassWord";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Registration } from "../Components/Registration";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/regist" element={<Registration/>} />
          <Route path="/forgot" element={<ForgotPassWord/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

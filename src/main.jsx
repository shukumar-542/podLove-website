import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./page/Aboutus/Aboutus.jsx";
import Home from "./page/Home/Home.jsx";
import Login from "./page/Login/Login.jsx";
import SignUp from "./page/SignUp/SignUp.jsx";
import ContactUs from "./page/ContactUs/ContactUs.jsx";
import HomePage from "./page/HomePage/HomePage.jsx";
import Otp from "./page/Otp/Otp.jsx";
import Location from "./page/Location/Location.jsx";
import Age from "./page/Age/Age.jsx";
import Gender from "./page/Gender/Gender.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/home"  element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>}  />
        <Route path="/verify-otp" element={<Otp/>}  />
        <Route path="/location" element={<Location/>} />
        <Route path="/age" element={<Age/>} />
        <Route path="/gender"  element={<Gender/>} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
);

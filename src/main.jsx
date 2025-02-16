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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>}  />
      </Routes>

    </BrowserRouter>
  </StrictMode>
);

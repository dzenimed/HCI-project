import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserProfile from "./components/userProfile/UserProfile";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route  path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

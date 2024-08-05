import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Custom/Header.jsx";
import Footer from "./components/Custom/Footer.jsx";
import Login from "./credential/Login.jsx";
import Register from "./credential/Register.jsx";
import CreateTrip from "./trip/index.jsx";
import ProtectedRoute from "./credential/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route
          path="/trip"
          element={
            <ProtectedRoute>
              <CreateTrip />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

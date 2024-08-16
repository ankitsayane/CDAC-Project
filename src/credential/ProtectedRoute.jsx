import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("isLoggedIn");

  if (user === "true") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

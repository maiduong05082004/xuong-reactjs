import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user.user.role);
  if (user) {
    if (user.user.role === "admin") {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
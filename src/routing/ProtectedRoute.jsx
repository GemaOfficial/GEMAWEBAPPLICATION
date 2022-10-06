import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../globals/GlobalContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedin } = useContext(GlobalContext);
  return isLoggedin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

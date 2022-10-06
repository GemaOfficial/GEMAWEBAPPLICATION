import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { GlobalProvider } from "../globals/GlobalProvider";

const Providers = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <AuthProvider>{children}</AuthProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default Providers;

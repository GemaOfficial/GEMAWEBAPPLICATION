import React from "react";
import { Toaster } from "react-hot-toast";
import FooterPage from "./pages/FooterPage";
import NavbarPage from "./pages/NavbarPage";
import { Routes } from "./routing/Routes";
import ScrollToTop from "./routing/Scroll";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: "zwodrei" } }}
      />
      <ScrollToTop />
      <NavbarPage />
      <Routes />
      <FooterPage />
    </>
  );
}

export default App;

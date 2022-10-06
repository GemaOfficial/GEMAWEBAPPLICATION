import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Confirm from "../components/popups/Confirm";
import ReceiveToken from "../components/popups/Receive";
import Send from "../components/popups/Send";
import SendToken from "../components/popups/sendToken";
import Swap from "../components/popups/Swap";
import Home from "../pages";
import AboutUsPage from "../pages/AboutUsPage";
import ClientPage from "../pages/ClientPage";
import ContactPage from "../pages/ContactPage";
import DashbordPage from "../pages/DashbordPage";
import LoginPage from "../pages/LoginPage";
import MarketPage from "../pages/MarketPage";
import OurServicePage from "../pages/OurServicePage";
import ProjectsPage from "../pages/ProjectsPage";
import SettingsPage from "../pages/SettingsPage";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./ProtectedRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/our-service" element={<OurServicePage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/our-projects" element={<ProjectsPage />} />
      <Route path="/client-page" element={<ClientPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/market-place" element={<MarketPage />} />
      <Route
        path="/user-dashboard"
        element={
          <PrivateRoute>
            <DashbordPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile-settings"
        element={
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/send-modal"
        element={
          <PrivateRoute>
            <Send />
          </PrivateRoute>
        }
      />
      <Route
        path="/send-tokens"
        element={
          <PrivateRoute>
            <SendToken />
          </PrivateRoute>
        }
      />
      <Route
        path="/receive-tokens"
        element={
          <PrivateRoute>
            <ReceiveToken />
          </PrivateRoute>
        }
      />
      <Route
        path="/swap-tokens"
        element={
          <PrivateRoute>
            <Swap />
          </PrivateRoute>
        }
      />
      <Route path="/confirm-swap" element={<Confirm />} />
    </Switch>
  );
};

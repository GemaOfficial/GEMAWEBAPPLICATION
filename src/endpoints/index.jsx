import axios from "axios";

export const BASE_URL = "https://api.gemaofficial.io";

export const endpoints = {
  Register: { url: `${BASE_URL}/api/v1/auth/register`, method: "POST" },
  Login: { url: `${BASE_URL}/api/v1/auth/login`, method: "POST" },
  currentUser: { url: `${BASE_URL}/api/v1/auth`, method: "GET" },
  Logout: { url: `${BASE_URL}/api/v1/auth/logout`, method: "POST" },
  updateProfile: { url: `${BASE_URL}/api/v1/profile/update`, method: "POST" },
  Health: { url: `${BASE_URL}/api/v1/status`, method: "GET" },
  tokenBrand: { url: `${BASE_URL}/api/v1/profile/tokens`, method: "POST" },
  sendTokens: { url: `${BASE_URL}/api/v1/profile/send`, method: "POST" },
  resetPassword: {
    url: `${BASE_URL}/api/v1/auth/reset-password`,
    method: "POST",
  },
  forgotPassword: {
    url: `${BASE_URL}/api/v1/auth/forgot-password`,
    method: "POST",
  },
};

export const makeRequest = async (url, method, body = {}, token = null) => {
  try {
    const { data } = await axios({
      url,
      method,
      data: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `x-auth-token ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

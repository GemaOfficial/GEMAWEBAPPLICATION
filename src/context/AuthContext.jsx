import { createContext } from "react";

const defaultValues = {
register: async (_registerParams) => {},
loginUser: async (_loginParams) => {},
Logout: async () => {},
updateProfile: async (_updateParams) => {},
currentUser: async () => {},
resetPassword: async (password, confirm_password, reset_code) => {},
forgotPassword: async (email) => {},
getBrands: async (_tokenParams) => {},
sendBrandTokens: async (_sendParams) => {},
};

export const AuthContext = createContext(defaultValues);
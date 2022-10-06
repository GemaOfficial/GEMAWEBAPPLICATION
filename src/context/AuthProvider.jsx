import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const { register, loginUser, getBrands, sendBrandTokens, Logout } = useAuth();
  return (
    <AuthContext.Provider
      value={{ register, loginUser, getBrands, sendBrandTokens, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

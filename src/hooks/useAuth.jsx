import { useContext } from "react";
import { endpoints, makeRequest } from "../endpoints";
import { GlobalContext } from "../globals/GlobalContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setGlobalUser, setIsLoggedin, setMarketData } =
    useContext(GlobalContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && loadUser(token);
    // eslint-disable-next-line
  }, []);

  const register = async (_registerParams) => {
    try {
      const data = await toast.promise(
        makeRequest(
          endpoints.Register.url,
          endpoints.Register.method,
          _registerParams
        ),
        {
          loading: "Registering...",
          success: "Registered Successfully",
          error: "Error while registering",
        },
        {
          style: {
            fontFamily: "zwodrei",
          },
        }
      );
      const { success, token } = data;
      if (success === true) {
        await loadUser(token);
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async (token) => {
    try {
      const data = await makeRequest(
        endpoints.currentUser.url,
        endpoints.currentUser.method,
        {},
        token
      );
      const { success, user } = data;
      const { username } = user;
      if (success === true) {
        await getBrands({ username });
        navigate("/user-dashboard");
        setGlobalUser(user);
        setIsLoggedin(true);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (_loginParams) => {
    try {
      const data = await toast.promise(
        makeRequest(endpoints.Login.url, endpoints.Login.method, _loginParams),
        {
          loading: "Logging in...",
          success: "Logged in Successfully",
          error: "Error while logging in",
        },
        {
          style: {
            fontFamily: "zwodrei",
          },
        }
      );
      const { success, token } = data;
      if (success === true) {
        await loadUser(token);
        localStorage.setItem("token", token);
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Logout = async () => {
    try {
      localStorage.removeItem("token");
      setGlobalUser(null);
      setIsLoggedin(false);
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async (_tokenParams) => {
    const token = localStorage.getItem("token");
    try {
      const brandData = await toast.promise(
        makeRequest(
          endpoints.tokenBrand.url,
          endpoints.tokenBrand.method,
          _tokenParams,
          token
        ),
        {
          loading: "Fetching Brands...",
          success: "Fetched Successfully",
          error: "Error while Fetching brands",
        }
      );
      const { success, data } = brandData;
      if (success === true) {
        setMarketData(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendBrandTokens = async (_sendParams) => {
    const token = localStorage.getItem("token");
    console.log("_sendParams", _sendParams);
    try {
      const data = await toast.promise(
        makeRequest(endpoints.sendTokens.url, endpoints.sendTokens.method),
        _sendParams,
        token
      );
      let { success, brands } = data;
      console.log("brands", brands);
      if (success === true) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { register, loadUser, loginUser, Logout, getBrands, sendBrandTokens };
};

import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [isShow, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [brand, setBrand] = useState("");
  const [globalUser, setGlobalUser] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showSwap, setShowSwap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [marketData, setMarketData] = useState([]);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        isShow,
        setShow,
        isOpen,
        setOpen,
        token,
        setToken,
        brand,
        setBrand,
        globalUser,
        setGlobalUser,
        isLoggedin,
        setIsLoggedin,
        showSwap,
        setShowSwap,
        showConfirm,
        setShowConfirm,
        marketData,
        setMarketData,
        balance,
        setBalance,
        amount,
        setAmount,
        receiver,
        setReceiver,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

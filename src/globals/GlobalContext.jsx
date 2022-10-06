import { createContext } from "react";

const defaultValues = {
  isShow: false,
  isOpen: false,
  token: "",
  brand: "",
  globalUser: {},
  isLoggedin: false,
  showSwap: false,
  showConfirm: false,
  marketData: [],
  balance: 0,
  amount: 0,
  receiver: "",

  setShow: () => {},
  setOpen: () => {},
  setToken: () => {},
  setBrand: () => {},
  setGlobalUser: () => {},
  setIsLoggedin: () => {},
  setShowSwap: () => {},
  setShowConfirm: () => {},
  setMarketData: () => {},
  setBalance: () => {},
  setAmount: () => {},
  setReceiver: () => {},
};

export const GlobalContext = createContext(defaultValues);

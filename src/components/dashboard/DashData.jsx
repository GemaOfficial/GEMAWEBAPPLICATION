import Crypto from "../../assets/dashboard/Crypto.svg";
import Doge from "../../assets/dashboard/doge";
import Internet from "../../assets/dashboard/Internet.svg";
import Lock from "../../assets/icon/Lock";
import Receive from "../../assets/icon/Receive";

export const WalletData = [

  {
    image: <Lock />,
    title: "Lock",
  },
  {
    image: <Receive />,
    title: "Receive",
  },
];

export const DashboardData = [
  {
    id: 1,
    image: <Doge />,
    title: "Dogecoin (DOGE) was created as a lighthearted alternative",
  },
  {
    id: 2,
    image: <img src={Internet} alt="interneticon" />,
    title: "DOGE was created as at thearted alternative to ",
  },
  {
    id: 3,
    image: <img src={Crypto} alt="cryptoicon" />,
    title: "Cryptocurrencies, but it's become seriously valuable",
  },
];

export const TokensData = [
  {
    token: "Token",
    price: "Price in USD",
    value: "value",
    market: "Market Cap",
    status: "Status",
    Address: "Address",
  },
  {
    token: "Brand X",
    price: "32.9",
    value: "134.0",
    market: "9.97",
    status: "Completed",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand Y",
    price: "3.9",
    value: "14.0",
    market: "1.97",
    status: "Completed",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand A",
    price: "9.0",
    value: "134.0",
    market: "9.97",
    status: "Pending",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand G",
    price: "10.0",
    value: "4.0",
    market: "3.97",
    status: "Cancelled",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand F",
    price: "16.5",
    value: "17.0",
    market: "29.9",
    status: "Pending",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand C",
    price: "84.5",
    value: "4.8",
    market: "2.67",
    status: "Completed",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand D",
    price: "3.5",
    value: "1.0",
    market: "3.77",
    status: "Cancelled",
    Address: "0x16677683783y2987907",
  },
  {
    token: "Brand E",
    price: "8.5",
    value: "1.0",
    market: "23.77",
    status: "Completed",
    Address: "0x16677683783y2987907",
  },
];

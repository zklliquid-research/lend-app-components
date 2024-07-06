import { Bitcoins, Eth, NFT, Syt, Usdt } from "../icon-component/Icons";

export const DUMMYDATA = [
  { coin: Bitcoins, title: "BTC", collateral: 10.0, ltv: 10000, wallet: 150.0 },
  {
    coin: Syt,
    title: "Syt",
    collateral: 290.0,
    ltv: 290000,
    wallet: 10000.0,
  },
  { coin: Usdt, title: "USDT", collateral: 0, ltv: 0, wallet: 0 },
  { coin: NFT, title: "NFT", collateral: 0, ltv: 0, wallet: 0 },
];

export const DUMMYCREDIT = [
  {
    coin: Bitcoins,
    title: "BTC",
    quantity: 2500.0,
    apr: 12.5,
    fees: 100.0,
    wallet: 150.0,
  },
  {
    coin: Eth,
    title: "USDT",
    quantity: 2900.0,
    apr: 50.0,
    fees: 50.0,
    wallet: 10000.0,
  },
  {
    coin: Usdt,
    title: "USDC",
    quantity: 2900.0,
    apr: 50.0,
    fees: 50.0,
    wallet: 10000.0,
  },
];

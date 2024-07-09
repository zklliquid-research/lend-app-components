import {
  Bitcoins,
  MoneyTime,
  OvalShape,
  People,
  Usdt,
} from "../../icon-component/Icons";
import LendCoinCard from "./lend-coin-card";
import LendersDataCard from "./lenders-data-card";

const Metrics = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap w-full">
      <div className="flex justify-between gap-5 items-center min-w-full">
        <LendCoinCard
          CoinIcon={Bitcoins}
          Icon={OvalShape}
          percentage={"52.8%"}
          secondPercentage={"1.2%"}
          coinType={"BUSD APR"}
        />
        <LendCoinCard
          CoinIcon={Usdt}
          Icon={OvalShape}
          percentage={"52.8%"}
          secondPercentage={"1.2%"}
          coinType={"USDT APR"}
        />
        <LendersDataCard Icon={MoneyTime} title={"Number of Lenders"} />
        <LendersDataCard Icon={People} title={"Number of Borrowers"} />
      </div>
    </div>
  );
};

export default Metrics;

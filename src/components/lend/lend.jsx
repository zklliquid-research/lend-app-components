import { useState } from "react";
import Button from "../../widget/Button";
import BonusReward from "./bonus-reward";
import Metrics from "./metrics";
import StableCoin from "./stable-coin";

const Lend = () => {
  const [toggle, setToggle] = useState(1);
  const toggleHandler = (id) => {
    setToggle(id);
  };
  return (
    <div>
      <h2 className=" font-Inter font-[700] text-[#FFF] text-[1.875rem]">
        Lend
      </h2>
      <div className=" flex gap-4 justify-center lg:hidden my-[2rem]">
        <Button
          className={` px-6 py-[8px] ${
            toggle === 1 ? "bg-[#2769E4]" : ""
          }  hover:bg-[#2769E4] w-[100%] md:w-[16rem]`}
          onClick={() => toggleHandler(1)}
        >
          Stable Coins
        </Button>
        <Button
          className={` px-6 py-[8px] ${
            toggle === 2 ? "bg-[#2769E4]" : ""
          } hover:bg-[#2769E4] w-[100%] md:w-[16rem]`}
          onClick={() => toggleHandler(2)}
        >
          Bonus Reward
        </Button>
      </div>
      <div className=" lg:mt-6">
        <Metrics />
      </div>
      <div className=" mt-6 flex gap-5 flex-col lg:flex-row">
        {/* className=
        {`${toggle === 1 ? "block" : "hidden"} lg:block w-[100%] lg:w-[55%]`} */}
        <div
          className={`${toggle === 1 ? "block" : "hidden"} lg:block lg:w-[80%]`}
        >
          <StableCoin />
        </div>
        <div
          className={`${toggle === 2 ? "block" : "hidden"} lg:block lg:w-[26%]`}
        >
          <BonusReward />
        </div>
      </div>
    </div>
  );
};

export default Lend;

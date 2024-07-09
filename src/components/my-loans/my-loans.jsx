import { useState } from "react";
import Button from "../../widget/Button";
import Collateral from "./collateral";
import Credit from "./credit";
// import CreditModal from "./credit-modal";
import PaymentModal from "./payment-modal";
import { useSelector } from "react-redux";

const MyLoans = () => {
  const [toggle, setToggle] = useState(1);
  const paymentObj = useSelector((state) => state.navigate.payment);
  const toggleHandler = (id) => {
    setToggle(id);
  };
  return (
    <div>
      <h2 className=" font-Inter font-[700] text-[#FFF] text-[1.875rem]">
        My Loans
      </h2>
      <div className=" py-3 flex flex-col gap-10 lg:flex-row lg:gap-2 xl:gap-6 xl:mt-3">
        <div className=" flex gap-4 justify-center lg:hidden mt-[1rem]">
          <Button
            className={` px-6 py-[8px] ${
              toggle === 1 ? "bg-[#2769E4]" : ""
            }  hover:bg-[#2769E4] w-[100%] md:w-[16rem]`}
            onClick={() => toggleHandler(1)}
          >
            Collateral
          </Button>
          <Button
            className={` px-6 py-[8px] ${
              toggle === 2 ? "bg-[#2769E4]" : ""
            } hover:bg-[#2769E4] w-[100%] md:w-[16rem]`}
            onClick={() => toggleHandler(2)}
          >
            Credit
          </Button>
        </div>
        <div
          className={`${
            toggle === 1 ? "block" : "hidden"
          } lg:block w-[100%] lg:w-[55%]`}
        >
          <Collateral />
        </div>

        <div
          className={`${
            toggle === 2 ? "block" : "hidden"
          } lg:block w-[100%] lg:w-[45%] min-h-[78vh]`}
        >
          <Credit />
        </div>
      </div>
      <PaymentModal title={paymentObj.title} />
    </div>
  );
};

export default MyLoans;

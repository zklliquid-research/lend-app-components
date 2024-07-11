import { ArrowDown, Information } from "../../icon-component/Icons";
import Button from "../../widget/Button";
import Card from "../../widget/Card";
import StableCoinTable from "./stable-coin-table";

const StableCoin = () => {
  return (
    <>
      <Card className={"min-h-[62vh] flex flex-col"}>
        <div className=" flex justify-between py-2">
          <div className=" text-[#FFF] text-[14px] font-Inter font-[700]">
            Stable coins
          </div>
          <span className=" lg:hidden">
            <Information />
          </span>
          <ul className=" hidden lg:flex items-center gap-14">
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Total earning</span> <ArrowDown />
            </li>
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Total borrowed</span>
              <ArrowDown />
            </li>
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Asset BP</span>
              <ArrowDown />
            </li>
            <li>
              <Information />
            </li>
          </ul>
        </div>
        <div className=" mt-8">
          <ul className=" flex lg:hidden justify-between items-center gap-3">
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Total earning</span> <ArrowDown />
            </li>
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Total borrowed</span>
              <ArrowDown />
            </li>
            <li className=" flex items-center gap-2 font-Inter font-[500] text-[#9BA6B7] text-[14px]">
              <span>Asset BP</span>
              <ArrowDown />
            </li>
          </ul>
        </div>
        <div className=" flex-1">
          <StableCoinTable />
        </div>

        <div className=" hidden lg:flex gap-4 justify-end">
          <Button className={" bg-[#292B33] px-[24px] py-[12px] text-[14px]"}>
            Compound
          </Button>
          <Button className={" bg-[#292B33] px-[24px] py-[12px] text-[14px]"}>
            Claim
          </Button>
          <Button className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px]"}>
            Deposit
          </Button>
          <Button className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px]"}>
            Withdraw
          </Button>
        </div>
      </Card>
      <div className=" lg:hidden grid grid-cols-2 gap-5 mt-6">
        <Button className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px]"}>
          Deposit
        </Button>
        <Button className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px]"}>
          Withdraw
        </Button>
        <Button className={" bg-[#292B33] px-[24px] py-[12px] text-[14px]"}>
          Compound
        </Button>
        <Button className={" bg-[#292B33] px-[24px] py-[12px] text-[14px]"}>
          Claim
        </Button>
      </div>
    </>
  );
};

export default StableCoin;

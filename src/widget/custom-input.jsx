import { ArrowDown } from "../icon-component/Icons";

const CustomInput = ({ title, Icon, coin }) => {
  return (
    <div>
      <p className=" font-Inter font-[500] text-[#6D7A86] text-[12px]">
        {title}
      </p>
      <div className=" w-full h-11 bg-[#212228] rounded-md flex justify-between items-center px-3 mt-1">
        <div className=" flex gap-2 items-center">
          <Icon />
          <span className=" font-Inter text-[#F2F4F5] text-[12px] font-[500]">
            {coin}
          </span>
        </div>
        <div>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;

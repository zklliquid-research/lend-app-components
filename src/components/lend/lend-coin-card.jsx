import Card from "../../widget/Card";

const LendCoinCard = ({
  Icon,
  CoinIcon,
  coinType,
  percentage,
  secondPercentage,
}) => {
  return (
    <Card className={" flex gap-3 w-fit 2xl:w-[19rem]"}>
      <div className=" bg-[#101115] w-[44px] h-[44px] rounded-md flex justify-center items-center">
        <Icon />
      </div>
      <div className=" flex flex-col gap-0">
        <div className=" flex gap-2 items-center">
          <CoinIcon height={"12"} width={"12"} />
          <span className=" text-[#6D7A86] text-[10px] font-Inter font-[500]">
            {coinType}
          </span>
        </div>
        <div className=" flex items-end gap-8">
          <span className=" text-[#FFF] text-[12px] font-Inter font-[600]">
            {percentage}
          </span>
          <div>
            <span className=" text-[10px] text-[#6D7A86] font-Inter font-[500]">
              {secondPercentage}
            </span>
            <div className=" w-[120px] h-[6px] bg-[#101115] rounded-lg">
              <div
                className={` bg-custom-gradient h-[5px] w-[52.8%] rounded-lg`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LendCoinCard;

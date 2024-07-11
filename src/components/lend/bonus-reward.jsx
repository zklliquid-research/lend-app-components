import { ArrowGreen, LendGraph } from "../../icon-component/Icons";
import { BONUSREWARD } from "../../lib/dummyDb";
import Button from "../../widget/Button";
import Card from "../../widget/Card";

const BonusReward = () => {
  return (
    <>
      <Card className={" lg:min-h-[62vh] flex flex-col"}>
        <div className=" flex flex-col items-center gap-2">
          <div>
            <LendGraph />
          </div>
          <div className=" flex flex-col items-center">
            <span className=" font-Inter text-[12px] text-[#FFF] font-[500]">
              Bonus Reward
            </span>
            <div className=" flex items-end gap-3">
              <span className=" text-[#FFF] font-Inter font-[700] text-[28px]">
                $12,875
              </span>
              <div className=" flex items-center gap-1 mb-[6px]">
                <span>
                  <ArrowGreen />
                </span>
                <span className=" text-[12px] font-Inter font-[500] text-center text-[#34D399]">
                  2%
                </span>
              </div>
            </div>
            <span className=" text-[12px] text-[#9BA6B7] font-Inter font-[500]">
              78% - 105%
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-3 flex-1 mt-5">
          {BONUSREWARD.map((bonus, index) => {
            return (
              <div className=" flex justify-between items-center" key={index}>
                <div className=" flex items-center gap-2">
                  {/* <Bitcoins height={"12"} width={"12"} /> */}
                  {<bonus.icon />}
                  <span className=" text-[#FFF] font-[500] font-Inter text-[14px]">
                    {bonus.title}
                  </span>
                </div>
                <div className=" text-[#9BA6B7] font-[500] font-Inter text-[14px]">
                  {bonus.amount}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" hidden lg:flex flex-col">
          <Button
            className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px] w-full"}
          >
            Claim bonus
          </Button>
        </div>
      </Card>
      <div className=" flex lg:hidden flex-col mt-8">
        <Button
          className={" bg-[#1F3E85] px-[24px] py-[12px] text-[14px] w-full"}
        >
          Claim bonus
        </Button>
      </div>
    </>
  );
};

export default BonusReward;

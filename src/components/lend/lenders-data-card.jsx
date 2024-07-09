import Card from "../../widget/Card";

const LendersDataCard = ({ Icon, title }) => {
  return (
    <Card className={" flex gap-3 w-fit 2xl:w-[19rem]"}>
      <div className=" bg-[#101115] w-[44px] h-[44px] rounded-md flex justify-center items-center">
        <Icon />
      </div>
      <div className=" flex flex-col gap-0">
        <div className="text-[#6D7A86] text-[12px] font-Inter font-[500] whitespace-nowrap">
          {title}
        </div>
        <div className=" flex items-end gap-4">
          <span className=" text-[#FFF] text-[12px] font-Inter font-[600]">
            {114}
          </span>
          <div>
            <span className=" text-[10px] text-[#34D399] font-Inter font-[500]">
              {"+ 12 last week"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LendersDataCard;

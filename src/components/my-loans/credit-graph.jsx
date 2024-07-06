import { Eclipse, Graph } from "../../icon-component/Icons";
import Card from "../../widget/Card";

const CreditGraph = () => {
  return (
    // <Card className={" flex justify-between items-center"}>
    //   <div className=" flex items-center gap-3">
    //     <div>
    //       <Graph />
    //     </div>
    //     <div className=" flex flex-col gap-3">
    //       <div className=" flex gap-2 items-center">
    //         <Eclipse />{" "}
    //         <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
    //           Liquidation Buffer
    //         </p>
    //       </div>
    //       <div className=" flex gap-2 items-center">
    //         <Eclipse />{" "}
    //         <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
    //           Min Repayment
    //         </p>
    //       </div>
    //       <div className=" flex gap-2 items-center">
    //         <Eclipse />{" "}
    //         <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
    //           Liquidity Chances
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" flex flex-col gap-3">
    //     <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
    //       $32,000.00
    //     </p>
    //     <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
    //       $11,000.00
    //     </p>
    //     <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
    //       NO
    //     </p>
    //   </div>
    // </Card>
    <Card className={" flex flex-col lg:flex-row gap-5"}>
      <div className=" flex justify-center">
        <Graph />
      </div>
      <div className=" flex justify-between lg:gap-[4rem]">
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-2 items-center">
            <Eclipse />{" "}
            <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
              Liquidation Buffer
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <Eclipse />{" "}
            <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
              Min Repayment
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <Eclipse />{" "}
            <p className=" text-[14px] font-Inter font-[500] text-[#6D7A86]">
              Liquidity Chances
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-3">
          <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
            $32,000.00
          </p>
          <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
            $11,000.00
          </p>
          <p className=" font-[600] text-end font-Inter text-[14px] text-[#FFF]">
            NO
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CreditGraph;

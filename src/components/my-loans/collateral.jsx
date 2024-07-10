import { useDispatch } from "react-redux";
import { Deposit } from "../../icon-component/Icons";
import Button from "../../widget/Button";
import Card from "../../widget/Card";
import CollateralTable from "./collateralTable";
import { navigationActions } from "../../store/navigation";

const Collateral = () => {
  const dispatch = useDispatch();

  const openDepositPaymentModal = () => {
    dispatch(navigationActions.onPayment({ title: "Deposit", isOpen: true }));
  };
  const openWithdrawPaymentModal = () => {
    dispatch(navigationActions.onPayment({ title: "Withdraw", isOpen: true }));
  };
  return (
    <>
      <Card className=" flex flex-col min-h-[68vh]">
        <div className=" flex-1">
          <div className=" flex justify-between">
            <p className=" font-Inter text-[#FFF] font-[600] text-[1rem]">
              Collateral
            </p>
            <div className=" flex gap-4">
              <p className=" text-[#9BA6B7] font-Inter text-[14px]">
                Total Value
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px]">$32,000</p>
            </div>
          </div>
          <div className=" flex gap-10 py-[1rem] border-t-[1px] border-b-[1px] border-[#212228] mt-[1rem]">
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Locked
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[16px] font-[600]">
                $22,500.00
              </p>
            </div>
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Unlocked
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[16px] font-[600]">
                $9,500.00
              </p>
            </div>
          </div>
          <div className=" mt-5">
            <CollateralTable />
          </div>
        </div>
        <div className="hidden lg:flex justify-end gap-2">
          <Button
            onClick={openDepositPaymentModal}
            className={
              " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2"
            }
          >
            <Deposit /> Deposit
          </Button>
          <Button
            className={
              " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2"
            }
            onClick={openWithdrawPaymentModal}
          >
            <Deposit />
            Withdraw
          </Button>
        </div>
      </Card>
      <div className="flex lg:hidden justify-center gap-5 mt-[5rem]">
        <button
          onClick={openDepositPaymentModal}
          className={
            " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2 justify-center py-[16px] px-[24px] w-[100%] rounded-md"
          }
        >
          <Deposit /> Deposit
        </button>
        <button
          onClick={openWithdrawPaymentModal}
          className={
            " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2 justify-center py-[16px] px-[24px] w-[100%] rounded-md"
          }
        >
          <Deposit />
          Withdraw
        </button>
      </div>
    </>
  );
};

export default Collateral;

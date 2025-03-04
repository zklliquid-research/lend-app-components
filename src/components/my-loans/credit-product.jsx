import { useDispatch } from "react-redux";
import { PercentageSquare, Repay } from "../../icon-component/Icons";
import Button from "../../widget/Button";
import Card from "../../widget/Card";
import CreditTable from "./credit-table";
import { navigationActions } from "../../store/navigation";

const CreditProduct = () => {
  const dispatch = useDispatch();
  const openBorrowPaymentModal = () => {
    dispatch(navigationActions.onPayment({ title: "Borrow", isOpen: true }));
  };
  const openRepayPaymentModal = () => {
    dispatch(navigationActions.onPayment({ title: "Repay", isOpen: true }));
  };
  return (
    <>
      <Card className={"flex flex-col min-h-[55.3vh] mt-4"}>
        <div className=" flex-1">
          <div className=" flex justify-between">
            <p className=" font-Inter text-[#FFF] font-[600] text-[1rem]">
              Credit
            </p>
            <div className=" flex gap-4">
              <p className=" text-[#9BA6B7] font-Inter text-[14px]">
                Total Value
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px]">$32,000</p>
            </div>
          </div>
          <div className=" hidden md:flex justify-between py-[1rem] border-t-[1px] border-b-[1px] border-[#212228] mt-[1rem]">
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Borrowed
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                $10,500.00
              </p>
            </div>
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Interest fee
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                $150.00
              </p>
            </div>
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Available
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                $1,900.00
              </p>
            </div>
            <div>
              <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                Amount Owed
              </p>
              <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                $1,900.00
              </p>
            </div>
          </div>
          <div className=" flex md:hidden justify-between py-[1rem] border-t-[1px] border-b-[1px] border-[#212228] mt-[1rem]">
            <div className="">
              <div>
                <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                  Borrowed
                </p>
                <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                  $10,500.00
                </p>
              </div>

              <div className=" mt-5">
                <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                  Interest fee
                </p>
                <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                  $150.00
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                  Available
                </p>
                <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                  $1,900.00
                </p>
              </div>
              <div className=" mt-5">
                <p className=" text-[#6D7A86] font-Inter text-[14px] font-[500]">
                  Amount Owed
                </p>
                <p className=" text-[#F2F4F5] font-Inter text-[14px] font-[600]">
                  $1,900.00
                </p>
              </div>
            </div>
          </div>
          <CreditTable />
        </div>
        <div className=" hidden lg:flex justify-end gap-2">
          <Button
            onClick={openBorrowPaymentModal}
            className={
              " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] px-[24px] py-[12px] flex gap-2"
            }
          >
            <PercentageSquare /> Borrow
          </Button>
          <Button
            onClick={openRepayPaymentModal}
            className={
              " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] px-[24px] py-[12px] flex gap-2"
            }
          >
            <Repay />
            Repay
          </Button>
        </div>
      </Card>
      <div className="flex lg:hidden justify-center gap-5 mt-[5rem]">
        <button
          onClick={openBorrowPaymentModal}
          className={
            " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2 justify-center py-[12px] px-[24px] w-[100%] rounded-md"
          }
        >
          <PercentageSquare /> Borrow
        </button>
        <button
          onClick={openRepayPaymentModal}
          className={
            " bg-[#1F3E85] text-[#FFF] font-Inter text-[14px] flex gap-2 justify-center py-[12px] px-[24px] w-[100%] rounded-md"
          }
        >
          <Repay />
          Repay
        </button>
      </div>
    </>
  );
};

export default CreditProduct;

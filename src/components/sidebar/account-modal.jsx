import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../../store/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/react";
import {
  Binance,
  ChevronDown,
  EmptyWalletSmall,
  RingSmall,
} from "../../icon-component/Icons";

const AccountModal = () => {
  const isOpen = useSelector((state) => state.navigate.account);

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(navigationActions.onAccount(false));
  };
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={"xs"}>
      <DrawerOverlay />

      <DrawerContent
        // className={"bg-[#101115]"}
        bgColor={"#101115"}
        paddingTop={"3rem"}
        // paddingBottom={"0.5rem"}
        // borderRight={"1px #191A1F solid"}
      >
        <DrawerBody>
          <div className=" flex flex-col gap-3">
            <button
              className={
                " font-Inter text-[14px] py-[15px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-between px-[12px] bg-[#1A1C22]"
              }
            >
              <div className=" flex gap-5 items-center">
                <RingSmall /> <p>0x573e ... 806b</p>
              </div>
              <ChevronDown />
            </button>
            <button
              className={
                " font-Inter text-[14px] py-[15px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-between px-[12px] bg-[#1A1C22]"
              }
            >
              <div className=" flex items-center gap-5">
                <EmptyWalletSmall /> <p>Wallet balace </p>
              </div>{" "}
              <ChevronDown />
            </button>
            <button
              className={
                " font-Inter text-[14px] py-[15px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-between px-[12px] bg-[#1A1C22]"
              }
            >
              <div className=" flex gap-5 items-center">
                <Binance /> <span>Binance smart chain</span>
              </div>{" "}
              <ChevronDown />
            </button>
          </div>
        </DrawerBody>
        <DrawerFooter
          paddingTop={"3rem"}
          display={"flex"}
          justifyContent={"center"}
        >
          <div className=" w-[40%] h-[3px] bg-[#212228]"></div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountModal;

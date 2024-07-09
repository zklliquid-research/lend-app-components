import {
  ArrowDown,
  ArrowUp,
  BtcIcon,
  DashboardIcon,
  LendIcon,
  ModalCancel,
  SynAass,
  SynBridge,
  SynMerge,
  SynTokenomics,
  SynVault,
  Sync,
  Syntrum,
  WalletIcon,
} from "../../icon-component/Icons";
import { Link } from "react-router-dom";
import NavLink from "./nav-link";
import { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../../store/navigation";
import Button from "../../widget/Button";
// import { useSelector } from "react-redux";

const classNames =
  "font-Inter text-[14px] py-[6px] px-[20px] hover:bg-[#2769E4] text-[#FFF]";

const SmallSidebar = () => {
  const [mouse, setMouse] = useState(false);
  const isOpen = useSelector((state) => state.navigate.open);
  const mouseEnterFunction = () => {
    setMouse(true);
  };

  const mouseLeaveFunction = () => {
    setMouse(false);
  };

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(navigationActions.onOpen(false));
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"xs"}>
      <div className=" lg:hidden relative">
        <DrawerOverlay />
      </div>
      <DrawerContent
        // className={"bg-[#101115]"}
        bgColor={{ base: "#191A1F", lg: "#101115" }}
        borderRight={"1px #191A1F solid"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top={"35px"}
          right={"-30px"}
          onClick={onClose}
        >
          <ModalCancel />
        </Box>
        <DrawerBody paddingX={"0px"}>
          <div className="flex mx-4 my-5 items-center">
            <span className=" hidden lg:block">
              <Syntrum />
            </span>

            <span className=" lg:hidden">
              <Sync />
            </span>
            <p className="text-white text-lg font-Poppins font-semibold ml-2">
              Syntrum
            </p>
          </div>
          <div className=" flex lg:hidden gap-6 items-center my-[3rem] mx-4">
            <Button className={classNames}>Defi</Button>
            <Button className={classNames}>GameFi</Button>
            <Button className={classNames}>NFT</Button>
          </div>
          <ul className=" lg:mt-6">
            <li>
              <Link to={""}>
                <NavLink
                  name={"Dashboard"}
                  ready={"soon"}
                  Icons={DashboardIcon}
                />
              </Link>
            </li>
            <li
              onMouseEnter={mouseEnterFunction}
              onMouseLeave={mouseLeaveFunction}
              className={`${mouse ? "bg-[#1A1C22]" : ""}`}
            >
              <div>
                <NavLink
                  name={"SynLand"}
                  ready={"ready"}
                  Arrow={mouse ? ArrowUp : ArrowDown}
                  Icons={BtcIcon}
                />
              </div>
              {mouse && (
                <div>
                  <Link to={"/lend"}>
                    <NavLink name={"Lend"} Icons={LendIcon} />
                  </Link>
                  <Link to={"/my-loans"}>
                    <NavLink name={"My Loans"} Icons={WalletIcon} />
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to={""}>
                <NavLink name={"SynMarg"} ready={"soon"} Icons={SynMerge} />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <NavLink name={"SynBridge"} ready={"soon"} Icons={SynBridge} />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <NavLink
                  name={"SynTokenomics"}
                  ready={"soon"}
                  Icons={SynTokenomics}
                />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <NavLink name={"Syn-aas"} ready={"soon"} Icons={SynAass} />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <NavLink name={"SynVault"} ready={"soon"} Icons={SynVault} />
              </Link>
            </li>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SmallSidebar;

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  BtcIcon,
  DashboardIcon,
  LendIcon,
  SynAass,
  SynBridge,
  SynMerge,
  SynTokenomics,
  SynVault,
  Syntrum,
  WalletIcon,
} from "../../icon-component/Icons";
import { Link } from "react-router-dom";
import NavLink from "./nav-link";

const XlSidbar = () => {
  const [mouse, setMouse] = useState(false);
  const mouseEnterFunction = () => {
    setMouse(true);
  };

  const mouseLeaveFunction = () => {
    setMouse(false);
  };
  return (
    <div className=" w-14 xl:w-60 font-Inter min-h-[97vh] hidden lg:block">
      <div className=" flex mx-[1rem] my-[1.25rem]">
        <Syntrum />
        <p className=" text-white text-[1rem] font-Poppins font-semibold ml-[0.5rem] hidden xl:block">
          Syntrum
        </p>
      </div>
      <ul className=" mt-[1.5rem]">
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"Dashboard"}
              ready={"soon"}
              Icons={DashboardIcon}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
        <li
          onMouseEnter={mouseEnterFunction}
          onMouseLeave={mouseLeaveFunction}
          className={`${mouse ? "bg-[#1A1C22]" : ""}`}
        >
          <Link to={""} className={""}>
            <NavLink
              name={"SynLand"}
              ready={"ready"}
              Arrow={mouse ? ArrowUp : ArrowDown}
              Icons={BtcIcon}
              className={"hidden xl:block"}
            />
          </Link>
          {mouse && (
            <div className="">
              <Link to={"/lend"}>
                <NavLink
                  name={"Lend"}
                  Icons={LendIcon}
                  className={"hidden xl:block"}
                />
              </Link>
              <Link to={"/my-loans"}>
                <NavLink
                  name={"My Loans"}
                  Icons={WalletIcon}
                  className={"hidden xl:block"}
                />
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"SynMarg"}
              ready={"soon"}
              Icons={SynMerge}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"SynBridge"}
              ready={"soon"}
              Icons={SynBridge}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"SynTokenomics"}
              ready={"soon"}
              Icons={SynTokenomics}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"Syn-aas"}
              ready={"soon"}
              Icons={SynAass}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
        <li>
          <Link to={""} className={""}>
            <NavLink
              name={"Syn-aas"}
              ready={"soon"}
              Icons={SynVault}
              className={"hidden xl:block"}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default XlSidbar;

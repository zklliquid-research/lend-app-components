import { useDispatch } from "react-redux";
import {
  ArrowSquare,
  AtomIcon,
  Binance,
  ChevronDown,
  DotIcon,
  Hambugger,
  Sync,
  WalletEmpty,
} from "../../icon-component/Icons";
import Button from "../../widget/Button";
import { navigationActions } from "../../store/navigation";

const Header = () => {
  const dispatch = useDispatch();
  const openLgNavigation = () => {
    dispatch(navigationActions.onOpen(true));
  };
  const openAccountNavigation = () => {
    dispatch(navigationActions.onAccount(true));
  };

  const classNames =
    "font-Inter text-[14px] py-[6px] px-[20px] hover:bg-[#2769E4] text-[#FFF]";
  return (
    <header className="">
      <div className=" flex lg:hidden justify-between">
        <button onClick={openLgNavigation}>
          <Hambugger />
        </button>
        <div className=" flex mx-[1rem] my-[1.25rem] items-center">
          <span>
            <Sync />
          </span>
          <p className=" text-white text-[1rem] font-Poppins font-semibold ml-[0.5rem]">
            Syntrum
          </p>
        </div>
        <button onClick={openAccountNavigation}>
          <DotIcon />
        </button>
      </div>
      <div className="hidden lg:flex justify-between">
        <div className=" flex gap-6 items-center">
          <div className=" xl:hidden">
            <button onClick={openLgNavigation}>
              <ArrowSquare />
            </button>
          </div>
          <Button className={classNames}>Defi</Button>
          <Button className={classNames}>GameFi</Button>
          <Button className={classNames}>NFT</Button>
        </div>
        <div className=" flex gap-3">
          <button
            className={
              " font-Inter text-[14px] py-[6px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-center px-[8px] bg-[#1A1C22]"
            }
          >
            <AtomIcon /> <p>0x573e ... 806b</p> <DotIcon />
          </button>
          <button
            className={
              " font-Inter text-[14px] py-[6px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-center px-[8px] bg-[#1A1C22]"
            }
          >
            <WalletEmpty /> <p>Wallet balace </p>
          </button>
          <button
            className={
              " font-Inter text-[14px] py-[6px] hover:bg-[#191A1F] text-[#FFF] flex items-center gap-3 rounded-3xl justify-center px-[8px] bg-[#1A1C22]"
            }
          >
            <Binance /> <ChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

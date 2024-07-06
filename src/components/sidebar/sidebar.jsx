import { useSelector } from "react-redux";
import SmallSidbar from "./sm-sidbar";
import XlSidbar from "./xl-sidbar";
import AccountModal from "./account-modal";

const SideBar = () => {
  const open = useSelector((state) => state.navigate.open);
  return (
    <div>
      <XlSidbar />
      {open && <SmallSidbar />}
      <AccountModal />
    </div>
  );
};

export default SideBar;

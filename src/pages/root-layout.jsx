import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

const RootLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className=" flex">
        <nav className=" border-r-2 border-[#191A1F]">
          <SideBar />
        </nav>
        <div className="py-[1rem] px-[1rem] w-screen">
          <Header />
          <main className=" mt-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

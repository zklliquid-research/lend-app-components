// import { Bitcoins } from "../../icon-component/Icons";
import { DUMMYDATA } from "../../lib/dummyDb";

const CollateralTable = () => {
  return (
    <div className="overflow-x-auto">
      {/* Larger screens */}
      <div className="hidden lg:block">
        <table className="w-full table-auto">
          <thead className="">
            <tr className="grid grid-cols-4 text-[#6D7A86] font-Inter text-[14px] font-[500]">
              <th className="col-span-1 text-left px-4 py-2">Asset</th>
              <th className="col-span-1 text-left px-4 py-2">Collateral</th>
              <th className="col-span-1 text-left px-4 py-2">LTV</th>
              <th className="col-span-1 text-left px-4 py-2">In Wallet</th>
            </tr>
          </thead>
          <tbody>
            {DUMMYDATA.map((data, index) => {
              const formattedLtv = new Intl.NumberFormat("en-US").format(
                data.ltv
              );
              const formattedWallet = new Intl.NumberFormat("en-US").format(
                data.wallet
              );
              return (
                <tr className="grid grid-cols-4 mt-4" key={index}>
                  <td className="col-span-1 flex items-center gap-2 px-4 py-2">
                    <data.coin />
                    <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                      {data.title}
                    </span>
                  </td>
                  <td
                    className={`col-span-1 ${
                      data.collateral <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    } font-Inter text-[14px] font-[600] px-4 py-2`}
                  >
                    {data.collateral}
                  </td>
                  <td
                    className={`col-span-1 ${
                      data.ltv <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    } font-Inter text-[14px] font-[600] px-4 py-2`}
                  >
                    {data.ltv > 0 ? "$" : ""}
                    {formattedLtv}
                  </td>
                  <td
                    className={`col-span-1 ${
                      data.wallet <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    } font-Inter text-[14px] font-[600] px-4 py-2`}
                  >
                    {formattedWallet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Smaller screens */}
      <div className="block lg:hidden">
        {DUMMYDATA.map((data, index) => {
          const formattedLtv = new Intl.NumberFormat("en-US").format(data.ltv);
          const formattedWallet = new Intl.NumberFormat("en-US").format(
            data.wallet
          );
          return (
            <div className="mt-4" key={index}>
              <div className="flex items-center gap-2 px-4 py-2">
                <data.coin />
                <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                  {data.title}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-4 py-2">
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    Collateral
                  </div>
                  <div
                    className={`font-Inter text-[14px] font-[600] ${
                      data.collateral <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    }`}
                  >
                    {data.collateral}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    LTV
                  </div>
                  <div
                    className={`font-Inter text-[14px] font-[600] ${
                      data.ltv <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    }`}
                  >
                    {data.ltv > 0 ? "$" : ""}
                    {formattedLtv}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    In Wallet
                  </div>
                  <div
                    className={`font-Inter text-[14px] font-[600] ${
                      data.wallet <= 0 ? "text-[#6D7A86]" : "text-[#FFF]"
                    }`}
                  >
                    {formattedWallet}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollateralTable;

import { STABLECOIN } from "../../lib/dummyDb";

const StableCoinTable = () => {
  return (
    <div className="overflow-x-auto mt-3">
      {/* Larger screens */}
      <div className="hidden lg:block">
        <table className=" w-full">
          <thead>
            <tr className="grid grid-cols-5 text-[#6D7A86] gap-5 py-2 font-Inter text-[14px] font-[500] border-y border-[#212228]">
              <th className="col-span-1 text-left px-4 py-2">Asset</th>
              <th className="col-span-1 text-left px-4 py-2">APY</th>
              <th className="col-span-1 text-left px-4 py-2">USD VALUE</th>

              <th className="col-span-1 text-left px-4 py-2 whitespace-nowrap">
                In Wallet
              </th>
              <th className="col-span-1 text-left px-4 py-2 whitespace-nowrap">
                Interest
              </th>
            </tr>
          </thead>
          <tbody>
            {STABLECOIN.map((data, index) => {
              const formattedUsdValue = new Intl.NumberFormat("en-US").format(
                data.value
              );
              const formattedInwallet = new Intl.NumberFormat("en-US").format(
                data.inwallet
              );
              return (
                <tr
                  className="grid grid-cols-5 mt-4 gap-5  border-b border-[#212228]"
                  key={index}
                >
                  <td className="col-span-1 flex items-center gap-2 px-4 py-2">
                    <data.coin />
                    <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                      {data.title}
                    </span>
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.apy} %
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {formattedUsdValue}
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {formattedInwallet}
                  </td>
                  <td className="col-span-1 text-[#34D399] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.interest}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Smaller screens */}
      <div className="block lg:hidden">
        {STABLECOIN.map((data, index) => {
          const formattedUsdValue = new Intl.NumberFormat("en-US").format(
            data.value
          );
          const formattedInwallet = new Intl.NumberFormat("en-US").format(
            data.inwallet
          );
          return (
            <div className="mt-4" key={index}>
              <div className="flex items-center gap-2 px-4 pt-7 border-t-[1px] border-[#292B33]">
                <data.coin />
                <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                  {data.title}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-4 py-2">
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    APY
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {data.apy} %
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    USD VALUE
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {formattedUsdValue}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    IN WALLET
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {formattedInwallet}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    INTEREST
                  </div>
                  <div className="text-[#34D399] font-Inter text-[14px] font-[600]">
                    {data.interest}
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

export default StableCoinTable;

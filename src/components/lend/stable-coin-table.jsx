import { STABLECOIN } from "../../lib/dummyDb";

const StableCoinTable = () => {
  return (
    <div className="overflow-x-auto mt-3 lg:mt-[-1.3rem]">
      {/* Larger screens */}
      <div className="hidden lg:block">
        <table className=" min-w-full table-auto">
          <thead>
            <tr className="flex text-[#6D7A86] py-2 font-Inter text-[14px] font-[500] border-y border-[#212228]">
              <th className="flex-1 px-2 text-left whitespace-nowrap py-2 tracking-wider">
                Asset
              </th>
              <th className="flex-1 px-2 text-center whitespace-nowrap py-2 tracking-wider">
                APY
              </th>
              <th className="flex-1 px-2 text-center whitespace-nowrap py-2 tracking-wider">
                USD VALUE
              </th>

              <th className="flex-1 px-2 text-center py-2 tracking-wider whitespace-nowrap">
                In Wallet
              </th>
              <th className="flex-1 px-2 text-right py-2 tracking-wider whitespace-nowrap">
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
                <tr className="flex mt-4 border-b border-[#212228]" key={index}>
                  <td className="flex-1 text-left whitespace-nowrap flex items-center gap-2 py-2">
                    <data.coin />
                    <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                      {data.title}
                    </span>
                  </td>
                  <td className="flex-1 text-center whitespace-nowrap text-[#FFF] font-Inter text-[14px] font-[600] py-2">
                    {data.apy} %
                  </td>
                  <td className="flex-1 text-center whitespace-nowrap text-[#FFF] font-Inter text-[14px] font-[600] py-2">
                    {formattedUsdValue}
                  </td>
                  <td className="flex-1 text-center whitespace-nowrap text-[#FFF] font-Inter text-[14px] font-[600] py-2">
                    {formattedInwallet}
                  </td>
                  <td className="flex-1 text-right whitespace-nowrap text-[#34D399] font-Inter text-[14px] font-[600] py-2">
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

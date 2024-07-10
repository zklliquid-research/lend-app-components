import { DUMMYCREDIT } from "../../lib/dummyDb";

const CreditTable = () => {
  return (
    <div className="overflow-x-auto">
      {/* Larger screens */}
      <div className="hidden lg:block">
        <table className=" min-w-full table-auto">
          <thead>
            <tr className="flex text-[#6D7A86] gap-5 font-Inter text-[14px] font-[500]">
              <th className="flex-1 whitespace-nowrap text-left px-4 py-2">
                Asset
              </th>
              <th className="flex-1 whitespace-nowrap text-center px-4 py-2">
                Quantity
              </th>
              <th className="flex-1 whitespace-nowrap text-center px-4 py-2">
                APR
              </th>
              <th className="flex-1 whitespace-nowrap text-center px-4 py-2">
                Fees
              </th>
              <th className="flex-1 whitespace-nowrap text-right px-4 py-2">
                In Wallet
              </th>
            </tr>
          </thead>
          <tbody>
            {DUMMYCREDIT.map((data, index) => {
              const formattedQuantity = new Intl.NumberFormat("en-US").format(
                data.quantity
              );
              return (
                <tr className="flex mt-4" key={index}>
                  <td className="flex-1 whitespace-nowrap text-left flex items-center gap-2 px-4 py-2">
                    <data.coin />
                    <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                      {data.title}
                    </span>
                  </td>
                  <td className="flex-1 whitespace-nowrap text-center text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {formattedQuantity}
                  </td>
                  <td className="flex-1 whitespace-nowrap text-center text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.apr} %
                  </td>
                  <td className="flex-1 whitespace-nowrap text-center text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.fees}
                  </td>
                  <td className="flex-1 whitespace-nowrap text-right text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.wallet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Smaller screens */}
      <div className="block lg:hidden">
        {DUMMYCREDIT.map((data, index) => {
          const formattedQuantity = new Intl.NumberFormat("en-US").format(
            data.quantity
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
                    Quantity
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {formattedQuantity}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    APR
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {data.apr} %
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    Fees
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {data.fees}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-[#6D7A86] font-Inter text-[14px] font-[500]">
                    In Wallet
                  </div>
                  <div className="text-[#FFF] font-Inter text-[14px] font-[600]">
                    {data.wallet}
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

export default CreditTable;

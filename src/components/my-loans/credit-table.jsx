import { DUMMYCREDIT } from "../../lib/dummyDb";

const CreditTable = () => {
  return (
    <div className="overflow-x-auto">
      {/* Larger screens */}
      <div className="hidden lg:block">
        <table>
          <thead>
            <tr className="grid grid-cols-5 text-[#6D7A86] gap-5 font-Inter text-[14px] font-[500]">
              <th className="col-span-1 text-left px-4 py-2">Asset</th>
              <th className="col-span-1 text-left px-4 py-2">Quantity</th>
              <th className="col-span-1 text-left px-4 py-2">APR</th>
              <th className="col-span-1 text-left px-4 py-2">Fees</th>
              <th className="col-span-1 text-left px-4 py-2 whitespace-nowrap">
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
                <tr className="grid grid-cols-5 mt-4 gap-5" key={index}>
                  <td className="col-span-1 flex items-center gap-2 px-4 py-2">
                    <data.coin />
                    <span className="text-[#FFF] font-Inter text-[14px] font-[600]">
                      {data.title}
                    </span>
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {formattedQuantity}
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.apr} %
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
                    {data.fees}
                  </td>
                  <td className="col-span-1 text-[#FFF] font-Inter text-[14px] font-[600] px-4 py-2">
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

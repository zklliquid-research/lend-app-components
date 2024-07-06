import Button from "../../widget/Button";

const NavLink = ({ name, ready, Icons, Arrow, className }) => {
  return (
    <div className=" flex justify-between items-end hover:bg-[#292B33] py-[1rem] px-[1rem]">
      <div className=" flex items-center gap-2">
        <Icons />
        <p
          className={` text-[#6D7A86] text-[0.85rem] font-Inter font-[500] ${className}`}
        >
          {name}
        </p>
      </div>
      {ready === "soon" && (
        <Button
          className={` bg-[#1A1C22] text-[#FFBC00] text-[0.85rem] font-Inter rounded-[8px] ${className}`}
        >
          Soon
        </Button>
      )}
      {ready === "ready" && <Arrow />}
    </div>
  );
};

export default NavLink;

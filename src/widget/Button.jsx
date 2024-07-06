const Button = ({ children, className, onClick, res }) => {
  return (
    <button
      onClick={onClick}
      {...res}
      className={`${className} px-[16px] py-[4px] rounded-md bg-[#1A1C22] font-Poppins`}
    >
      {children}
    </button>
  );
};

export default Button;

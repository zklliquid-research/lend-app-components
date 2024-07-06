const Card = ({ children, className, res }) => {
  return (
    <div
      {...res}
      className={`bg-[#191A1F] rounded-md p-[0.85rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

import classNames from "classnames";

const Button = ({
  children,
  className: additionalClassName,
  onClick,
  rest,
}) => {
  const classes = classNames(
    // rest.className,
    "px-[16px] py-[4px] rounded-md bg-[#1A1C22] font-Poppins",

    additionalClassName
  );
  return (
    <button onClick={onClick} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;

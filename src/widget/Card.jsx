import classNames from "classnames";

const Card = ({ children, className: additionalClasses, rest }) => {
  const classes = classNames(
    "bg-[#191A1F] rounded-md p-[0.85rem]",
    additionalClasses
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Card;

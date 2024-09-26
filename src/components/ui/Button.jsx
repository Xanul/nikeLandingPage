const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
        } ${fullWidth && "w-full"} flex justify-center items-center gap-2 px-7 py-4
        font-montserrat text-lg leading-none border rounded-full`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow-right" />}
    </button>
  );
};

export default Button;

import PropTypes from "prop-types";

export default function NavbarBurgerButton({
  className,
  isActivated = false,
  ...rest
}) {
  return (
    <button
      className={`w-[40px] h-[36px] p-[10px] flex flex-col items-center justify-between focus-visible:a11y-primary ${className}`}
      {...rest}
    >
      <span className="sr-only">Otevřít / zavřít menu</span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ease-out-back ${
          isActivated ? "-rotate-45 translate-y-[7px]" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ease-out-back ${
          isActivated ? "opacity-0 translate-x-1" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ease-out-back ${
          isActivated ? "rotate-45 translate-y-[-7px]" : ""
        }`}
      ></span>
    </button>
  );
}

NavbarBurgerButton.propTypes = {
  className: PropTypes.string,
  isActivated: PropTypes.bool,
};

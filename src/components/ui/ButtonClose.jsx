import { forwardRef } from "react";
import PropTypes from "prop-types";

// icon
import { HiX } from "react-icons/hi";

const ButtonClose = forwardRef(
  ({ color, size, className, onClick, ...rest }, ref) => {
    return (
      <button
        className={`p-[0.25em] inline-flex items-center justify-center cursor-pointer
        leading-none rounded-full bg-opacity-10
        hover:bg-opacity-20 dark:hover:bg-opacity-20
        focus:bg-opacity-20 dark:focus:bg-opacity-20 focus:a11y-primary
        transition duration-default
        ${size === "xs" ? "text-base" : ""}
        ${size === "sm" ? "text-xl" : ""}
        ${size === "md" ? "text-2xl" : ""}
        ${size === "lg" ? "text-3xl" : ""}
        ${size === "xl" ? "text-4xl" : ""}
        ${color === "theme" ? "text-rich bg-default" : ""}
        ${color === "light" ? "text-white bg-gray-300" : ""}
        ${color === "dark" ? "text-gray-950 bg-gray-700" : ""}
        ${className}`}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        <span className="sr-only">Zavřít</span>
        <HiX />
      </button>
    );
  }
);

ButtonClose.displayName = "ButtonClose"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

ButtonClose.defaultProps = {
  color: "theme",
  size: "md",
  className: "",
};

ButtonClose.propTypes = {
  color: PropTypes.oneOf(["theme", "dark", "light"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonClose;

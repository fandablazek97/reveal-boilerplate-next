import { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const RevealButton = forwardRef(
  (
    {
      as: Component,
      children,
      color,
      size,
      IconLeft,
      IconRight,
      isLoading,
      isDisabled,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        className={`px-[1.5em] py-[1.25em] inline-flex items-center justify-center
        uppercase font-sans font-semibold leading-none tracking-widest
        rounded-default overflow-hidden
        transition duration-default
        group relative z-0 
        ${color === "primary" ? "bg-primary focus:a11y-primary text-white" : ""}
        ${
          color === "secondary"
            ? "bg-secondary focus:a11y-secondary text-white"
            : ""
        }
        ${
          color === "success"
            ? "bg-success-600 focus:a11y-success text-white"
            : ""
        }
        ${color === "error" ? "bg-error-600 focus:a11y-error text-white" : ""}
        ${
          color === "warning"
            ? "bg-warning-600 focus:a11y-warning text-white"
            : ""
        }
        ${color === "info" ? "bg-info-600 focus:a11y-info text-white" : ""}
        ${color === "black" ? "bg-black focus:a11y-black text-white" : ""}
        ${color === "white" ? "bg-white focus:a11y-white text-black" : ""}
        ${size === "sm" ? "text-xs" : ""}
        ${size === "md" ? "text-sm" : ""}
        ${size === "lg" ? "text-base" : ""}
        ${size === "xl" ? "text-lg" : ""}
        ${
          isLoading
            ? "cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        } ${isDisabled ? "grayscale opacity-50 pointer-events-none" : ""} 
        ${className}
        `}
        {...rest}
      >
        {/* Hover span */}
        <span
          className={`absolute z-0 inset-[-5%] w-[110%] h-[110%]
          bg-opacity-40 dark:bg-opacity-40
          scale-x-0 opacity-0 -skew-x-12 group-hover:scale-x-110 group-hover:opacity-100
          transform-gpu transition duration-400
          ${color === "black" ? "bg-white" : "bg-body"}
          ${color === "white" ? "bg-gray-950" : "bg-body"}
          `}
        ></span>

        {/* Left icon */}
        {IconLeft !== null && (
          <span
            className={`z-1 mr-3 scale-130 ${isLoading ? "invisible" : ""}`}
          >
            {IconLeft}
          </span>
        )}

        {/* Button text */}
        <span className={`z-1 ${isLoading ? "invisible" : ""}`}>
          {children}
        </span>

        {/* Right icon */}
        {IconRight !== null && (
          <span
            className={`z-1 ml-3 scale-130 ${isLoading ? "invisible" : ""}`}
          >
            {IconRight}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <CgSpinner className="absolute z-1 inset-0 m-auto w-[2em] h-[2em] animate-spin-fast" />
        )}
      </Component>
    );
  }
);

RevealButton.displayName = "RevealButton"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

RevealButton.defaultProps = {
  as: "a",
  children: "This is button",
  color: "primary",
  size: "md",
  IconLeft: null,
  IconRight: null,
  isLoading: false,
  isDisabled: false,
  className: "",
};

RevealButton.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
    "black",
    "white",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  IconLeft: PropTypes.element,
  IconRight: PropTypes.element,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default RevealButton;

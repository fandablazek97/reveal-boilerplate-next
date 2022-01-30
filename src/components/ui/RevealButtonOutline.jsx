import { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const RevealButtonOutline = forwardRef(
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
        bg-transparent overflow-hidden
        border-2 border-solid rounded-default
        transition duration-default
        group relative z-0 
        ${
          color === "primary"
            ? "text-primary border-primary hover:text-white focus:a11y-primary"
            : ""
        }
        ${
          color === "secondary"
            ? "text-secondary border-secondary hover:text-white focus:a11y-secondary"
            : ""
        }
        ${
          color === "success"
            ? "text-success-600 border-success-600 hover:text-white focus:a11y-success"
            : ""
        }
        ${
          color === "error"
            ? "text-error-600 border-error-600 hover:text-white focus:a11y-error"
            : ""
        }
        ${
          color === "warning"
            ? "text-warning-600 border-warning-600 hover:text-white focus:a11y-warning"
            : ""
        }
        ${
          color === "info"
            ? "text-info-600 border-info-600 hover:text-white focus:a11y-info"
            : ""
        }
        ${
          color === "black"
            ? "text-black border-black hover:text-white focus:a11y-black"
            : ""
        }
        ${
          color === "white"
            ? "text-white border-white hover:text-black focus:a11y-white"
            : ""
        }
        ${size === "sm" ? "text-xs" : ""}
        ${size === "md" ? "text-sm" : ""}
        ${size === "lg" ? "text-base" : ""}
        ${size === "xl" ? "text-lg" : ""}
        ${
          isLoading
            ? "cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        } ${
          isDisabled
            ? "grayscale opacity-50 pointer-events-none"
            : "opacity-100"
        } ${className}`}
        {...rest}
      >
        {/* Hover span */}
        <span
          className={`absolute z-0 inset-[-5%] w-[110%] h-[110%]
          scale-x-0 opacity-0 -skew-x-12 
          group-hover:scale-x-110 group-hover:opacity-100 
          transform-gpu transition duration-400
          ${color === "primary" ? "bg-primary" : ""}
          ${color === "secondary" ? "bg-secondary" : ""}
          ${color === "success" ? "bg-success-600" : ""}
          ${color === "error" ? "bg-error-600" : ""}
          ${color === "warning" ? "bg-warning-600" : ""}
          ${color === "info" ? "bg-info-600" : ""}
          ${color === "black" ? "bg-black" : ""}
          ${color === "white" ? "bg-white" : ""}
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

RevealButtonOutline.displayName = "RevealButtonOutline"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

RevealButtonOutline.defaultProps = {
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

RevealButtonOutline.propTypes = {
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

export default RevealButtonOutline;

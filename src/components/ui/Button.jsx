import { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const Button = forwardRef(
  (
    {
      as: Component,
      children,
      size,
      color,
      shape,
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
    // Size classes
    const sizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    };

    // Color classes
    const colorClasses = {
      primary: "bg-primary text-white focus:a11y-primary",
      secondary: "bg-secondary text-white focus:a11y-secondary",
      success: "bg-success-600 text-white focus:a11y-success",
      error: "bg-error-600 text-white focus:a11y-error",
      warning: "bg-warning-600 text-white focus:a11y-warning",
      info: "bg-info-600 text-white focus:a11y-info",
      black: "bg-black text-white focus:a11y-black",
      white: "bg-white text-black focus:a11y-white",
    };

    // Shape classes
    const shapeClasses = {
      square: "rounded-none",
      default: "rounded-default",
      rounded: "rounded-md",
      pill: "rounded-full",
    };
    return (
      <Component
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        className={`px-[1.5em] py-[1.25em] inline-flex items-center justify-center
        uppercase font-sans font-semibold leading-none tracking-widest
        overflow-hidden
        transition duration-default
        group relative z-0 
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${shapeClasses[shape]}
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
          className={`absolute z-0 inset-0 w-full h-full
          bg-opacity-40
          opacity-0 group-hover:opacity-100
          transition-opacity duration-default
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

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

Button.defaultProps = {
  as: "a",
  children: "This is button",
  size: "md",
  color: "primary",
  shape: "default",
  IconLeft: null,
  IconRight: null,
  isLoading: false,
  isDisabled: false,
  className: "",
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
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
  shape: PropTypes.oneOf(["square", "default", "rounded", "pill"]),
  IconLeft: PropTypes.element,
  IconRight: PropTypes.element,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;

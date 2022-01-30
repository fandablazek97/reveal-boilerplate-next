import { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const ButtonOutline = forwardRef(
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
      primary:
        "text-primary border-primary hover:text-white hover:bg-primary focus:a11y-primary",
      secondary:
        "text-secondary border-secondary hover:text-white hover:bg-secondary focus:a11y-secondary",
      success:
        "text-success-600 border-success-600 hover:text-white hover:bg-success-600 focus:a11y-success",
      error:
        "text-error-600 border-error-600 hover:text-white hover:bg-error-600 focus:a11y-error",
      warning:
        "text-warning-600 border-warning-600 hover:text-white hover:bg-warning-600 focus:a11y-warning",
      info: "text-info-600 border-info-600 hover:text-white hover:bg-info-600 focus:a11y-info",
      black:
        "text-black border-black hover:text-white hover:bg-black focus:a11y-black",
      white:
        "text-white border-white hover:text-black  hover:bg-white focus:a11y-white",
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
        bg-transparent overflow-hidden
        border-2 border-solid
        transition duration-default
        group relative z-0 
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${shapeClasses[shape]}
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

ButtonOutline.displayName = "ButtonOutline"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

ButtonOutline.defaultProps = {
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

ButtonOutline.propTypes = {
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

export default ButtonOutline;

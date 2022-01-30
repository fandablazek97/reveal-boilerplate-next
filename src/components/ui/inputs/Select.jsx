import PropTypes from "prop-types";

// Chevron icon
import { HiChevronDown } from "react-icons/hi";

export default function Select({
  as: Component,
  id,
  name,
  label,
  isDisabled,
  isRequired,
  className,
  children,
  ...rest
}) {
  return (
    <Component className={`block w-full relative ${className}`}>
      <label htmlFor={id} name={name} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={`w-full h-auto px-4 py-2.5
        text-base text-rich font-normal placeholder:text-rich placeholder:opacity-60 
        bg-body-200 rounded-default border-2 border-body-200 
        transition duration-default 
        focus:bg-body-200 focus:border-primary focus:!outline-none focus:ring-1 focus:ring-primary ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-default opacity-100"
        }`}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      >
        {children}
      </select>
      <HiChevronDown className=" absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-muted" />
    </Component>
  );
}

Select.defaultProps = {
  as: "span",
  id: "select-id",
  name: "select",
  label: "Select label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Select.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

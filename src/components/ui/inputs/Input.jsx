import PropTypes from "prop-types";

export default function Input({
  as: Component,
  type,
  id,
  name,
  label,
  isDisabled,
  isRequired,
  className,
  ...rest
}) {
  return (
    <Component className={`block w-full ${className}`}>
      <label htmlFor={id} name={name} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`w-full h-auto px-4 py-2.5
        text-base text-rich font-normal placeholder:text-rich placeholder:opacity-60 
        bg-body-200 rounded-default border-2 border-body-200 
        transition duration-default 
        focus:bg-transparent focus:border-primary focus:relative focus:z-1
        focus:!outline-none focus:ring-1 focus:ring-primary ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-text opacity-100"
        }`}
        placeholder={label}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Component>
  );
}

Input.defaultProps = {
  as: "span",
  type: "text",
  id: "input-id",
  name: "input-field",
  label: "Input label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Input.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

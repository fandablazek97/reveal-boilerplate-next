import PropTypes from "prop-types";

export default function Radio({
  as: Component,
  id,
  name,
  children,
  isDisabled,
  isRequired,
  className,
  ...rest
}) {
  return (
    <Component className={`flex h-auto ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        className={`w-5 h-5 cursor-pointer bg-body-300 rounded-full
        border-1 border-body-300
        checked:bg-primary checked:hover:bg-primary checked:focus:bg-primary
        transition-shadow duration-default
        focus:a11y-primary 
        ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-pointer opacity-100"
        }`}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
      <label htmlFor={id} name={name} className="ml-3">
        {children}
      </label>
    </Component>
  );
}

Radio.defaultProps = {
  as: "span",
  id: "radio-id",
  name: "radio-name",
  children: "Radio label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Radio.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

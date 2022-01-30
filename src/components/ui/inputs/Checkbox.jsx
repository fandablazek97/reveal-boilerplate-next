import PropTypes from "prop-types";

export default function Checkbox({
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
        type="checkbox"
        id={id}
        name={name}
        className={`w-5 h-5 bg-body-300 rounded
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

Checkbox.defaultProps = {
  as: "span",
  id: "checkbox-id",
  name: "checkbox-name",
  children: "Checkbox label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Checkbox.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

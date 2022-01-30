import PropTypes from "prop-types";

export default function Switch({
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
        className={`w-12 h-7 relative z-0 cursor-pointer bg-body-300
        border-0 rounded-full
        transition duration-default
        hover:bg-body-300
        focus:a11y-primary
        checked:bg-none checked:bg-primary
        before:absolute before:z-1 before:content-['']
        before:w-6 before:h-6
        before:left-0.5 before:top-0.5 before:bg-white before:rounded-full
        before:transition before:duration-default before:ease-out-back before:transform-gpu
        checked:before:translate-x-5
        checked:hover:bg-primary
        checked:focus:bg-primary 
        ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-pointer opacity-100"
        }
        `}
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

Switch.defaultProps = {
  as: "span",
  id: "switch-id",
  name: "switch-name",
  children: "Switch label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Switch.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

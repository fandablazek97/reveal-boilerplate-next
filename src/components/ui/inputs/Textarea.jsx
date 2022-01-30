import PropTypes from "prop-types";

export default function Textarea({
  as: Component,
  id,
  name,
  label,
  isDisabled,
  isRequired,
  className,
  cols,
  rows,
  ...rest
}) {
  return (
    <Component className={`block w-full ${className}`}>
      <label htmlFor={id} name={name} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        className={`w-full h-auto px-4 py-2.5
        text-base text-rich font-normal placeholder:text-rich placeholder:opacity-60
        bg-body-200 resize-y rounded-default border-2 border-body-200
        transition duration-default
        focus:bg-transparent focus:border-primary focus:!outline-none focus:ring-1 focus:ring-primary ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-text opacity-100"
        } ${className}`}
        placeholder={label}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Component>
  );
}

Textarea.defaultProps = {
  as: "span",
  id: "textarea-id",
  name: "textarea",
  label: "Textarea label",
  isDisabled: false,
  isRequired: false,
  className: "",
  cols: "30",
  rows: "8",
};

Textarea.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string,
};

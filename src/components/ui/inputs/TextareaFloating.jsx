import PropTypes from "prop-types";

export default function TextareaFloating({
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
    <Component className={`block w-full relative ${className}`}>
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        className={`peer w-full h-auto px-4 py-2.5
        text-base text-rich font-normal 
        placeholder-transparent
        bg-body-200 rounded-default border-2 border-body-200 resize-y
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
      <label
        htmlFor={id}
        name={name}
        className={`cursor-text absolute z-1 h-full px-4 py-2.5 origin-top-left top-0 left-0
        text-base text-default font-medium opacity-70 scale-75 -translate-x-3 -translate-y-7
        peer-focus:opacity-60 peer-focus:scale-75 peer-focus:-translate-x-3 peer-focus:-translate-y-7
        peer-placeholder-shown:opacity-80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:translate-y-0.5
        transition duration-default
        transform-gpu
        `}
      >
        {label} {isRequired ? <span className="text-red-600">*</span> : ""}
      </label>
    </Component>
  );
}

TextareaFloating.defaultProps = {
  as: "span",
  id: "textarea-floating-id",
  name: "textarea-floating",
  label: "Floating label",
  isDisabled: false,
  isRequired: false,
  className: "",
  cols: "30",
  rows: "8",
};

TextareaFloating.propTypes = {
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

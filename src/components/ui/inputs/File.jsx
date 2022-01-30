import PropTypes from "prop-types";

export default function File({
  as: Component,
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
        type="file"
        id={id}
        name={name}
        className={`block w-full text-default bg-transparent border-1 border-body-200 rounded-default transition duration-default overflow-hidden
        file:cursor-pointer file:mr-6 file:py-2.5 file:px-8
        file:border-0
        file:text-base file:font-normal file:bg-body-200 file:text-default
        file:transition-colors file:duration-default
        hover:file:bg-body-300
        focus:border-primary focus:!outline-none focus:ring-1 focus:ring-primary ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-text opacity-100"
        }
        `}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Component>
  );
}

File.defaultProps = {
  as: "span",
  id: "file-id",
  name: "input-file",
  label: "File Label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

File.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

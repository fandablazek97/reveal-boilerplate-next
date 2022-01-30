import PropTypes from "prop-types";

export default function Addon({ as: Component, className, children }) {
  return (
    <Component
      className={`flex items-center justify-center shrink-0 px-4 py-2.5
        text-base text-rich font-normal
        bg-body-300 rounded-default border-2 border-body-300
        transition-colors duration-default ${className}`}
    >
      {children}
    </Component>
  );
}

Addon.defaultProps = {
  as: "span",
  className: "",
};

Addon.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

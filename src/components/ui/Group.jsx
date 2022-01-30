import PropTypes from "prop-types";

export default function Group({ as: Component, children, className }) {
  return <Component className={`ui-group ${className}`}>{children}</Component>;
}

Group.defaultProps = {
  as: "div",
  className: "",
};

Group.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

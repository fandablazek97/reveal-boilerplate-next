import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function ZoomOut({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-zoom-out-hidden ${
        view ? "reveal-zoom-out-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

ZoomOut.defaultProps = {
  as: "div",
};

ZoomOut.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

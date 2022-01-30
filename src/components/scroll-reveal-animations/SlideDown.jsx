import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function SlideDown({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-slide-down-hidden ${
        view ? "reveal-slide-down-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

SlideDown.defaultProps = {
  as: "div",
};

SlideDown.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

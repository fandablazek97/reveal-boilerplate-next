import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function SlideLeft({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-slide-left-hidden ${
        view ? "reveal-slide-left-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

SlideLeft.defaultProps = {
  as: "div",
};

SlideLeft.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

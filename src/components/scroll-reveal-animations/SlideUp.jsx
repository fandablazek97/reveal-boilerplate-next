import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function SlideUp({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-slide-up-hidden ${
        view ? "reveal-slide-up-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

SlideUp.defaultProps = {
  as: "div",
};

SlideUp.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

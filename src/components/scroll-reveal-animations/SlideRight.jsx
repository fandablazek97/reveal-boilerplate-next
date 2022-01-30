import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function SlideRignt({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-slide-right-hidden ${
        view ? "reveal-slide-right-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

SlideRignt.defaultProps = {
  as: "div",
};

SlideRignt.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

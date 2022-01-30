import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function Flip({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-flip-hidden ${
        view ? "reveal-flip-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

Flip.defaultProps = {
  as: "div",
};

Flip.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

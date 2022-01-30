// !! Komponent je v provizorní testovací verzi a může obsahovat chyby
// !! Nelze použít na elementy s pozicí `fixed` / `absolute` / `relative`

import { useState } from "react";
import PropTypes from "prop-types";

export default function Tooltip({
  as: Component,
  label,
  placement,
  color,
  className,
  hasArrow,
  children,
}) {
  // State
  const [isVisible, setIsVisible] = useState(false);

  function showTooltip() {
    setIsVisible(true);
  }

  function hideTooltip() {
    setIsVisible(false);
  }

  return (
    <Component
      className={`relative max-w-fit max-h-fit ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={hideTooltip}
    >
      {children}
      {/* Actual tooltip */}
      <span
        className={`absolute z-10 px-[1em] py-[0.75em] cursor-default pointer-events-none
        rounded-lg shadow-sm
        text-sm font-medium text-center whitespace-nowrap leading-none
        transition-visibility duration-150
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}
        ${
          color === "theme"
            ? "text-gray-50 bg-gray-800 dark:text-gray-900 dark:bg-gray-100"
            : ""
        }
        ${color === "dark" ? "text-gray-50 bg-gray-800" : ""}
        ${color === "light" ? "text-gray-900 bg-gray-100" : ""}

        ${
          placement === "top"
            ? "-top-3 left-1/2 -translate-x-1/2 -translate-y-full"
            : ""
        }
        ${
          placement === "bottom"
            ? "-bottom-3 left-1/2 -translate-x-1/2 translate-y-full"
            : ""
        }
        ${
          placement === "left"
            ? "-left-3 top-1/2 -translate-y-1/2 -translate-x-full"
            : ""
        }
        ${
          placement === "right"
            ? "-right-3 top-1/2 -translate-y-1/2 translate-x-full"
            : ""
        }
        `}
      >
        {label}
        {hasArrow && (
          <span
            className={`absolute w-2.5 h-2.5 origin-center rotate-45 bg-gray-800 
            ${color === "theme" ? "bg-gray-800 dark:bg-gray-100" : ""}
            ${color === "dark" ? "bg-gray-800" : ""}
            ${color === "light" ? "bg-gray-100" : ""}
            ${
              placement === "top"
                ? "top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
                : ""
            }
            ${
              placement === "bottom"
                ? "bottom-full translate-y-1/2 left-1/2 -translate-x-1/2"
                : ""
            }
            ${
              placement === "left"
                ? "left-full -translate-x-1/2 top-1/2 -translate-y-1/2"
                : ""
            }
            ${
              placement === "right"
                ? "right-full translate-x-1/2 top-1/2 -translate-y-1/2"
                : ""
            }`}
          ></span>
        )}
      </span>
    </Component>
  );
}

Tooltip.defaultProps = {
  as: "div",
  label: "Tooltip label",
  placement: "bottom",
  color: "dark",
  hasArrow: true,
  className: "",
};

Tooltip.peopTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  color: PropTypes.oneOf(["dark", "light", "theme"]),
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

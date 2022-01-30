import PropTypes from "prop-types";

export default function Alert({
  children,
  color = "success",
  isClosed = false,
  className = "",
}) {
  // Classes for color prop
  const colorClasses = {
    success:
      "bg-success-500 text-success-700 dark:text-success-200 prose-headings:text-success-700 dark:prose-headings:text-success-200",
    error:
      "bg-error-500 text-error-700 dark:text-error-200 prose-headings:text-error-700 dark:prose-headings:text-error-200",
    warning:
      "bg-warning-500 text-warning-700 dark:text-warning-200 prose-headings:text-warning-700 dark:prose-headings:text-warning-200",
    info: "bg-info-500 text-info-700 dark:text-info-200 prose-headings:text-info-700 dark:prose-headings:text-info-200",
    gray: "bg-gray-500 text-default prose-headings:text-default",
  };
  return (
    <div
      className={`w-full h-auto p-4 md:p-7 rounded-default leading-normal bg-opacity-15 
      ${colorClasses[color]} 
      ${isClosed ? "hidden" : ""}
      ${className}
      `}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["success", "error", "warning", "info", "gray"]),
  isClosed: PropTypes.bool,
  className: PropTypes.string,
};

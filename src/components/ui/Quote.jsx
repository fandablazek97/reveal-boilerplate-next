import PropTypes from "prop-types";

export default function Quote({ name, className, children }) {
  return (
    <blockquote
      className={`w-full border-l-4 border-primary pl-5 ${className}`}
    >
      <div className="text-base lg:text-lg text-default font-medium">
        {children}
      </div>

      {name !== null && (
        <div className="mt-5 mb-0 flex items-center">
          <span className="w-5 h-px bg-muted mr-5"></span>
          <span className="block text-base md:text-sm text-muted">{name}</span>
        </div>
      )}
    </blockquote>
  );
}

Quote.defaultProps = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sunt dolorem reprehenderit!",
  name: null,
  className: "",
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
};

import propTypes from "prop-types";

export default function HomePageCard({ Icon, title, text, className }) {
  return (
    <div
      className={`p-10 flex flex-col space-y-6 bg-body-200 rounded-default ${className}`}
    >
      <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
        {Icon}
      </div>
      <h2 className="ui-heading" data-heading="md">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}

HomePageCard.propTypes = {
  Icon: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
};

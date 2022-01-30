import PropTypes from "prop-types";

import Badge from "components/ui/Badge";

export default function Hero({ title, subtitle }) {
  return (
    <header className="w-screen h-96 md:h-128" role="banner">
      <div
        className="ui-wrapper h-full flex flex-col justify-center items-center"
        data-wrapper="sm"
      >
        <Badge color="primary" className="mt-20 mb-3 text-center">
          Verze 1.2.X
        </Badge>
        <h1 className="ui-heading w-full text-center text-3xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="ui-lead self-center text-center">{subtitle}</p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

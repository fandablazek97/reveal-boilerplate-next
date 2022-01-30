import PropTypes from "prop-types";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`w-24 h-10 ${className}`}>
      <img
        src="/svg/brand.svg"
        alt="Logo značky"
        width="96"
        height="40"
        className="w-full h-full dark:invert"
      />
    </div>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};

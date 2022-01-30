import PropTypes from "prop-types";

// Configs
import socialLinks from "settings/socialLinks";

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedia({ className }) {
  return (
    <div
      className={`social-icons flex space-x-7 text-2xl no-underline ${className}`}
    >
      <a
        href={socialLinks.instagram.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.instagram.ariaLabel}
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaInstagram aria-label="instagram" />
      </a>
      <a
        href={socialLinks.facebook.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.facebook.ariaLabel}
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaFacebookF aria-label="facebook" />
      </a>
      <a
        href={socialLinks.linkedin.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.linkedin.ariaLabel}
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaLinkedinIn aria-label="linkedin" />
      </a>
      <a
        href={socialLinks.twitter.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.twitter.ariaLabel}
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaTwitter aria-label="twitter" />
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};

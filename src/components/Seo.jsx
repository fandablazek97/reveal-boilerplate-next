import NextHead from "next/head";
import PropTypes from "prop-types";

// Config
import globalSettings from "settings/globalSettings";

export default function Seo({ title, description, keywords, robotsEnabled }) {
  return (
    <NextHead>
      <title>{`${globalSettings.meta.siteName} | ${title}`}</title>
      <meta name="description" content={description} />

      {/* Social media */}
      <meta property="og:site_name" content={globalSettings.meta.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Keywords */}
      {keywords !== null && <meta name="keywords" content={keywords} />}

      {/* Robots */}
      {robotsEnabled ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex" />
      )}
    </NextHead>
  );
}

Seo.defaultProps = {
  title: "Název stránky",
  description: globalSettings.meta.description,
  keywords: null,
  robotsEnabled: true,
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  robotsEnabled: PropTypes.bool,
};

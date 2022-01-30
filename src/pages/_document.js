// How to use this file: `https://nextjs.org/docs/advanced-features/custom-document`

import Document, { Html, Head, Main, NextScript } from "next/document";
import globalSettings from "settings/globalSettings";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={globalSettings.meta.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

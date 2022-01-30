// Layout
import AppLayout from "layouts/AppLayout";

// Website settings
import globalSettings from "settings/globalSettings";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Page components
import CookiesPolicy from "containers/Cookies/CookiesPolicy";

export default function CookiesPage() {
  return (
    <AppLayout>
      <Seo title="Zásady používání cookies" robotsEnabled={false} />

      <Hero title="Zásady používání cookies" />

      <div
        className="ui-wrapper ui-text-formatter pt-6 pb-32"
        data-wrapper="sm"
      >
        <CookiesPolicy
          domain={globalSettings.meta.shortUrl}
          ownerName={globalSettings.client.fullName}
          adress={globalSettings.client.adress}
          ico={globalSettings.client.ico}
          validTime="šest měsíců"
          lastUpdate="16. 12. 2021"
        />
      </div>
    </AppLayout>
  );
}

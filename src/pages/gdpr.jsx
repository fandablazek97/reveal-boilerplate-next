// Layout
import AppLayout from "layouts/AppLayout";

// Website settings
import globalSettings from "settings/globalSettings";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Page components
import GdprPolicy from "containers/Gdpr/GdprPolicy";

export default function GdprPage() {
  return (
    <AppLayout>
      <Seo title="Ochrana osobních údajů" robotsEnabled={false} />

      <Hero title="Ochrana osobních údajů" />

      <div
        className="ui-wrapper ui-text-formatter pt-20 pb-32"
        data-wrapper="sm"
      >
        <GdprPolicy
          ownerName={globalSettings.client.fullName}
          adress={globalSettings.client.adress}
          email={globalSettings.client.email}
          phone={globalSettings.client.phone}
          ico={globalSettings.client.ico}
          takesEffectDate={globalSettings.launchDate}
        />
      </div>
    </AppLayout>
  );
}

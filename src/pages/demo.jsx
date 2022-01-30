// Stránka sloužící pouze pro konfiguraci komponentů, vzhledu a celkovou ukázku
// Po konfiguraci soubor smazat

// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Page Components
import DemoSlider from "containers/Demo/DemoSlider";
import DemoCarousel from "containers/Demo/DemoCarousel";
import DemoModalYoutube from "containers/Demo/DemoModalYoutube";

export default function demoPage() {
  return (
    <AppLayout>
      <Seo
        title="Demo komponenty"
        description="Často používané komponenty na webech, které lze snadno upravit pro konkrétní účel."
      />

      {/* Main Content */}
      <Hero
        title="Demo komponenty"
        subtitle="Často používané komponenty na webech, které lze snadno upravit pro konkrétní účel."
      />

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading text-center" data-heading="lg">
          Slider
        </h2>
        <DemoSlider />
      </div>

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading text-center" data-heading="lg">
          Carousel
        </h2>
        <DemoCarousel />
      </div>

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading text-center" data-heading="lg">
          Modal pro youtube iFrame
        </h2>
        <DemoModalYoutube />
      </div>
    </AppLayout>
  );
}

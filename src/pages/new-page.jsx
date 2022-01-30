// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo
        title="Seo title"
        description="Meta description...."
        keywords="Awesome, Keywords, Goes, Here"
      />

      <Hero
        title="New page heading"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eligendi voluptatum distinctio."
      />

      {/* Konkrétní obsah stránky.... */}
    </AppLayout>
  );
}

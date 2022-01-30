// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Page components
import ContactForm from "containers/Contact/ContactForm";

export default function ContactPage() {
  return (
    <AppLayout>
      <Seo
        title="Kontakt"
        description="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
      />

      <Hero
        title="Kontaktujte nás"
        subtitle="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
      />

      <div className="ui-wrapper pt-16 pb-24" data-wrapper="sm">
        <h2 className="ui-heading" data-heading="lg">
          Kontaktní formulář
        </h2>
        <ContactForm />
      </div>
    </AppLayout>
  );
}

import NextLink from "next/link";

// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <Seo title="404: Stránka nenalezena" robotsEnabled={false} />

      <header className="w-screen h-screen relative min-h-[640px] bg-body-100">
        <div className="ui-wrapper h-full flex flex-col justify-center items-center">
          <span className="ui-heading" data-heading="xl">
            &#128531;
          </span>
          <h1 className="ui-heading text-primary text-3xl sm:text-5xl lg:text-6xl">
            Stránka nenalezena
          </h1>
          <p className="ui-lead text-center mb-16">
            Ještě nikam neutíkejte! Vypadá to že stránka, kterou se pokoušíte
            nalézt již neexistuje nebo byla přesunuta. Kliknutím na tlačítko
            snadno přejdete na hlavní stránku.
          </p>
          <NextLink href="/">
            <Button as="a" IconLeft={<HiHome />}>
              Hlavní stránka
            </Button>
          </NextLink>
        </div>
      </header>
    </AppLayout>
  );
}

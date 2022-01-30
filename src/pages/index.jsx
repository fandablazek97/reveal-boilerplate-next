// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Page Components
import HomePageCard from "containers/HomePage/HomePageCard";

// Icons
import {
  HiMoon,
  HiLightningBolt,
  HiPuzzle,
  HiFire,
  HiEye,
  HiHand,
} from "react-icons/hi";

export default function IndexPage() {
  return (
    <AppLayout>
      <Seo
        title="Hlavní stránka"
        description="Starter se základními knihovnamy, komponenty a kódem pro rychlý a produktivní vývoj nového projektu."
        keywords="react, javascript, css framework, user interface"
      />

      <Hero
        title="Reveal Boilerplate"
        subtitle="Starter se základními knihovnamy, komponenty a kódem pro rychlý a produktivní vývoj nového projektu."
      />

      <section className="ui-wrapper py-32">
        <h2 className="ui-heading text-center mb-20" data-heading="lg">
          Vlastnosti boilerplatu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <HomePageCard
            className="col-span-1"
            Icon={<HiLightningBolt />}
            title="Vysoký výkon"
            text="Starter je optimalizovaný tak, aby výsledný produkt dosahoval maximálních možných výsledků v měření pageSpeed insights i pocitové rychlosti."
          />

          <HomePageCard
            className="col-span-1"
            Icon={<HiHand />}
            title="Přístupnost"
            text="Každý komponent je napsaný tak, aby splňoval WAI-ARIA standard pro
            přístupnost na webu. Některé komponenty také využívají Headless UI,
            knihovnu komponent bez stylů se zaměřením na přístupnost."
          />

          <HomePageCard
            className="col-span-1"
            Icon={<HiPuzzle />}
            title="Modulární CSS"
            text="CSS je složené ze souborů, které lze jednotlivě importovat. 
          Každý modul také obsahuje sadu proměnných pro rychlé a snadné přizpůsobení, 
          včetně globálních proměnných, které mají efekt na celý web."
          />

          <HomePageCard
            className="col-span-1"
            Icon={<HiMoon />}
            title="Dark mode"
            text="Hotová implementace dark modu s přepínačem a sadou barev pro zobrazení obou režimů. 
          Lze samozřejmě použít jen jeden barevný režim."
          />

          <HomePageCard
            className="col-span-1"
            Icon={<HiFire />}
            title="Rychlý vývoj"
            text="Díky předprogramovaným komponentům, tailwindu, a lehce zapomatovatelné
          syntaxi CSS tříd je vývoj webu rychlý, produktivní a bez zbytečných starostí."
          />

          <HomePageCard
            className="col-span-1"
            Icon={<HiEye />}
            title="SEO"
            text="SEO komponent pro snadné vložení meta tagů na stránku důležitých pro
            vyhledávače. Web má také generátor sitemapy a robots.txt."
          />
        </div>
      </section>

      <section className="bg-primary py-32">
        <div className="ui-wrapper" data-wrapper="sm">
          <h2 className="ui-heading text-center text-white" data-heading="lg">
            Roadmap do dalších verzí
          </h2>
          <ul className="list-disc space-y-3 text-white text-xl ml-3">
            <li>
              Cookie consent s možností nastavit si preference na stránce o
              cookies (podle vyhlášky o cookies pro rok 2022)
            </li>
            <li>
              Real time validace kontaktního formuláře + valid / invalid props
              do inputů
            </li>
            <li>Rozšířit sadu inputů a přidat datepicker komponent</li>
            <li>
              Sjednotit styl psaní tříd pro tailwind, možná přidat knihovnu jako
              clsx nebo classnames a přepsat všechny komponenty podle nich
            </li>
            <li>
              Rozšířit knihovnu ui komponent a k některým přidat varianty jako
              solid, outline v kombinaci s barvami...
            </li>
          </ul>
        </div>
      </section>
    </AppLayout>
  );
}

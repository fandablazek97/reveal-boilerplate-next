import Button from "components/Button";
import { HiCheck, HiX } from "react-icons/hi";

export default function CookieConsent() {
  return (
    <div className="fixed z-100 left-0 md:left-5 right-0 bottom-0 md:bottom-5 md:max-w-3xl w-screen h-auto px-5 sm:px-8 pt-10 pb-20 md:py-10 bg-gray-950">
      <p className="text-center sm:text-left pb-10">
        Naše webová stránka používá soubory cookie, aby umožnila základní
        fungování stránek, analýzu návštěvnosti, marketing a personalizaci.
      </p>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">
        <a href="#" className="ui-link" data-link="2">
          Přizpůsobit nastavení
        </a>
        <Button as="button" size="xs" IconLeft={<HiX />} className="sm:ml-auto">
          Odmítnout vše
        </Button>
        <Button as="button" size="xs" IconLeft={<HiCheck />}>
          Přijmout vše
        </Button>
      </div>
    </div>
  );
}

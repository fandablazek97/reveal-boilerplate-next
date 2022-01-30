import Link from "components/ui/Link";

import { HiChat } from "react-icons/hi";

export default function FloatingAction() {
  return (
    <Link
      to="/contact"
      className="no-underline w-[4.5rem] h-[4.5rem] fixed z-[90] right-7 bottom-8 flex items-center justify-center rounded-full group transition-shadow duration-default focus-visible:a11y-primary"
      aria-label="Kontakt"
      role="button"
    >
      <span className="absolute inset-0 w-full h-full rounded-full shadow-md bg-primary group-hover:scale-115 transform-gpu transition-transform duration-default ease-out-back"></span>
      <span className="sr-only">Kontaktujte nás</span>
      <HiChat className="text-white text-4xl z-1" aria-label="Kontakt" />
    </Link>
  );
}

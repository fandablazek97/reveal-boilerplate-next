// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import { useState, useEffect } from "react";

// Links from global settings
import { mainRoutes, callToAction } from "settings/navLinks";

// Hooks & utils
import useScrollListener from "hooks/useScrollListener";
import { isBrowser } from "utils/isBrowser";

// Global components
import Link from "components/ui/Link";
import Tooltip from "components/ui/Tooltip";
import BrandLogo from "components/BrandLogo";
import SocialMedia from "components/SocialMedia";

// Tightly coupled components
import NavbarBurgerButton from "./NavbarBurgerButton";
import NavbarThemeToggler from "./NavbarThemeToggler";

export default function Navbar() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Funkce pro otevírání / zavírání menu po kliknutí na burger menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isBrowser) {
      document.body.classList.toggle("helper-scroll-lock");
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
    if (isBrowser) {
      document.body.classList.remove("helper-scroll-lock");
    }
  }

  // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }

    // Skryje / ukáže navigaci na základě podmínky
    if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      aria-label="Hlavní navigace webu"
      className={`w-screen fixed z-100 transform-gpu transition-[background,transform,height,box-shadow] duration-400 ease-in-out ${
        isNavScrolled
          ? "h-20 bg-body shadow-soft-xl dark:shadow-none"
          : "h-20 md:h-32"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    >
      {/* Vnitřní wrapper navigace - šířku menu upravit zde */}
      <div
        className="ui-wrapper h-full flex items-center justify-between relative"
        data-wrapper="lg"
      >
        {/* Logo navigace */}
        <Link to="/" onClick={closeMenu} className="mr-auto z-10">
          <BrandLogo />
        </Link>

        {/* Desktop - hlavní list s položkami menu */}
        <ul className="list-none mr-5 xl:mr-8 space-x-7 xl:space-x-12 hidden lg:flex">
          {mainRoutes.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="ui-link uppercase text-sm text-rich"
                data-link="2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop & mobile - Theme toggler */}
        <Tooltip
          label="Přepnout tmavý režim"
          placement="bottom"
          color="dark"
          className="mr-5 xl:mr-8"
        >
          <NavbarThemeToggler />
        </Tooltip>

        {/* Desktop - Call to action */}
        <a
          href={callToAction[0].link}
          className="ui-link text-xl text-primary self-center hidden lg:inline-flex"
          data-link="4"
        >
          {callToAction[0].label}
        </a>

        {/* Burger menu */}
        <NavbarBurgerButton
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu-list"
          aria-label="Otevřít / zavřít hlavní menu"
          className="lg:hidden z-10"
          isActivated={isMenuOpen}
        />
      </div>

      {/* ------------------------- */}
      {/* Mobile - Full screen menu */}
      <div
        className={`block fixed inset-0 w-screen h-screen bg-body transform-gpu transition-visibility ease-out ${
          isMenuOpen
            ? "opacity-100 visible duration-400"
            : "opacity-0 invisible duration-150"
        }`}
      >
        {/* Vnitřní wrapper mobilního menu */}
        <div className="ui-wrapper h-full pt-24 xs:pt-28 pb-44 flex flex-col items-center justify-between">
          {/* Mobile - Menu list s položkami */}
          <ul
            id="mobile-menu-list"
            className={`list-none space-y-5 flex flex-col text-center items-center justify-start transform-gpu transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-500 delay-150"
                : "-translate-y-12 opacity-0 duration-0 delay-150"
            }`}
          >
            {mainRoutes.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="ui-link text-xl uppercase text-rich font-bold"
                  data-link="2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile - Call to action list */}
          <ul
            className={`list-none my-10 xs:my-14 space-y-5 flex flex-col text-center items-center justify-start transform-gpu transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-500 delay-300"
                : "-translate-y-12 opacity-0 duration-0 delay-150"
            }`}
          >
            {/* Mobile - Call to action items */}
            {callToAction.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="ui-link text-2xl text-primary font-semibold normal-case"
                  data-link="4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile - Odkazy na sociální sítě */}
          <SocialMedia
            className={`mt-auto transform-gpu transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-500 delay-450"
                : "-translate-y-12 opacity-0 duration-0 delay-150"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}

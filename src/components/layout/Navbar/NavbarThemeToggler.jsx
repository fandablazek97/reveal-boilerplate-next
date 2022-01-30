import { useTheme } from "hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";

// Theme toggler component
export default function NavbarThemeToggler({ className }) {
  let [setting, setSetting] = useTheme();

  return (
    <button
      className={`flex items-center justify-center p-[0.4em]
      text-[1.7rem] text-rich leading-none
      bg-default bg-opacity-0 rounded-md
      transition-colors duration-default
      hover:bg-opacity-10 focus-visible:a11y-primary
      ${className}`}
      onClick={() => setSetting(setting === "dark" ? "light" : "dark")}
      aria-label="zapnout nebo vypnout tmavý vzhled"
    >
      <HiSun className="dark:hidden" />
      <HiMoon className="hidden dark:inline" />
    </button>
  );
}

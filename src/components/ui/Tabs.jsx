// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/tabs

import { Fragment } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";

function Tabs({ children }) {
  const tabs = children.map((child) => (
    // Konkrétní Tab
    <HeadlessTab as={Fragment} key={child.props.title}>
      {({ selected }) => (
        <button
          className={`py-4 px-6 font-semibold leading-none rounded-default transition duration-default focus:!outline-none focus-visible:a11y-primary ${
            selected ? "text-rich bg-body-300" : "text-muted hover:text-rich"
          }`}
        >
          <span className="text-sm md:text-base leading-none">
            {child.props.title}
          </span>
        </button>
      )}
    </HeadlessTab>
  ));

  const tabPanel = children.map((child) => (
    // Obsah Tabu
    <HeadlessTab.Panel className="py-6" key={child.props.title}>
      {child.props.children}
    </HeadlessTab.Panel>
  ));
  return (
    <HeadlessTab.Group>
      {/* Kontejner pro všechny Taby */}
      <HeadlessTab.List className="flex justify-start items-center space-x-3 md:space-x-6">
        {tabs}
      </HeadlessTab.List>
      {/* Kontejner pro všechny obsahy každého tabu */}
      <HeadlessTab.Panels>{tabPanel}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}

function Tab(props) {
  return <>{props.children}</>;
}

export { Tabs, Tab };

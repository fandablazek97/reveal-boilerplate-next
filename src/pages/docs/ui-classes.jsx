// Stránka sloužící pouze pro konfiguraci komponentů, vzhledu a celkovou ukázku
// Po konfiguraci soubor smazat

// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

export default function uiClassesPage() {
  return (
    <AppLayout>
      <Seo
        title="CSS třídy"
        description="CSS třídy se snadno zapomatovatelnou a logickou syntaxí."
      />

      {/* Main content */}
      <Hero
        title="CSS třídy"
        subtitle="CSS třídy se snadno zapomatovatelnou a logickou syntaxí."
      />

      {/* Typografie */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Typografie
        </h2>

        <h1 className="ui-heading" data-heading="xl">
          Nadpis xl
        </h1>
        <h2 className="ui-heading" data-heading="lg">
          Nadpis lg
        </h2>
        <h3 className="ui-heading" data-heading="md">
          Nadpis md
        </h3>
        <h4 className="ui-heading" data-heading="sm">
          Nadpis sm
        </h4>
        <p className="ui-lead my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt
          illum quibusdam ullam perspiciatis omnis amet aspernatur magni, velit
          quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eum
          obcaecati reiciendis, impedit cumque alias consequuntur qui id, non,
          quos quis maxime labore debitis distinctio praesentium. Aliquid
          ducimus quae corporis natus numquam aliquam accusamus accusantium
          rerum harum, ut corrupti ab, expedita recusandae nam et commodi
          dolorem tempore veritatis at voluptatem!
        </p>

        <h3 className="ui-heading my-12" data-heading="md">
          List s ikonami
        </h3>
        <ul className="ui-list mb-10">
          <li>ui list item #1</li>
          <li>ui list item #2</li>
          <li>ui list item #3</li>
          <li>ui list item #4</li>
          <li>ui list item #5</li>
        </ul>
      </div>

      {/* Barvy textu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Barvy textu
        </h2>

        <div className="space-y-10">
          <h3 className="ui-heading text-xl text-primary">text-primary</h3>
          <h3 className="ui-heading text-xl text-secondary">text-secondary</h3>
          <h3 className="ui-heading text-xl text-muted">text-muted</h3>
          <h3 className="ui-heading text-xl text-default">text-default</h3>
          <h3 className="ui-heading text-xl text-rich">text-rich</h3>
        </div>
      </div>

      {/* Barvy pozadí */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Barvy pozadí
        </h2>

        <div className="space-y-10">
          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-primary">
            <p className="text-white">bg-primary</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-secondary">
            <p className="text-white">bg-secondary</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-body">
            <p className="text-default">bg-body</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center border border-default border-solid rounded-lg bg-body-100">
            <p className="text-default">bg-body-100</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-body-200">
            <p className="text-default">bg-body-200</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-body-300">
            <p className="text-default">bg-body-300</p>
          </div>
        </div>
      </div>

      {/* Separátor */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Separátory
        </h2>

        <h3
          className="ui-heading ui-separator"
          data-separator="left"
          data-heading="md"
        >
          Separátor vlevo
        </h3>
        <h3
          className="ui-heading ui-separator text-center"
          data-separator="center"
          data-heading="md"
        >
          Separátor uprostřed
        </h3>
        <h3
          className="ui-heading ui-separator text-right"
          data-separator="right"
          data-heading="md"
        >
          Separátor vpravo
        </h3>
      </div>

      {/* Divider */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Divider
        </h2>
        <hr className="ui-divider" />
      </div>

      {/* Wrappery */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Wrappery
        </h2>
      </div>

      <div className="space-y-10 mb-32">
        <div
          className="ui-wrapper py-8 lg:py-16 bg-emerald-500 dark:bg-emerald-700 rounded-lg text-white text-center flex flex-col items-center justify-center"
          data-wrapper="lg"
        >
          <h3 className="ui-heading text-white" data-heading="lg">
            Wrapper lg
          </h3>
          <p>90% šířka na všech zařízeních</p>
        </div>
        <div className="ui-wrapper py-8 lg:py-16 bg-blue-500 dark:bg-blue-700 rounded-lg text-white text-center flex flex-col items-center justify-center">
          <h3 className="ui-heading text-white" data-heading="lg">
            Wrapper
          </h3>
          <p>1200px (75rem) šířka - na menších zařízeních 90%</p>
        </div>
        <div
          className="ui-wrapper py-8 lg:py-16 bg-yellow-500 dark:bg-yellow-700 rounded-lg text-white text-center flex flex-col items-center justify-center"
          data-wrapper="sm"
        >
          <h3 className="ui-heading text-white" data-heading="lg">
            Wrapper sm
          </h3>
          <p>768px (48rem) šířka - na menších zařízeních 90%</p>
        </div>
      </div>

      {/* Links */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Linky
        </h2>

        <div className="space-y-10 flex flex-col">
          <span className="ui-link text-lg">ui-link</span>

          <span className="ui-link text-lg" data-link="2">
            ui-link-2
          </span>

          <span className="ui-link text-lg" data-link="3">
            ui-link-3
          </span>

          <span className="ui-link text-lg" data-link="4">
            ui-link-4
          </span>

          <span className="ui-link text-lg" data-link="5">
            ui-link-5
          </span>

          <span className="text-lg self-start">běžný odkaz</span>
        </div>
      </div>

      {/* Zobrazení kódu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Zobrazení kódu
        </h2>

        <code>styles/ui/code.css</code>
      </div>

      {/* Zobrazení tagu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Zobrazení tagu
        </h2>

        <span className="ui-mark">styles/ui/tag.css</span>
      </div>

      {/* Klávesová zkratka */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Klávesová zkratka
        </h2>
        <kbd>ctrl</kbd> + <kbd>c</kbd>
      </div>

      {/* Progress bar */}
      <div className="ui-wrapper mb-64">
        <h2 className="ui-heading mb-20" data-heading="lg">
          Progress bar
        </h2>

        <div className="flex flex-col space-y-10">
          <h3 className="ui-heading pt-20" data-heading="md">
            S hodnotou
          </h3>
          <h4 className="ui-heading" data-heading="sm">
            sm
          </h4>
          <progress
            className="ui-progress"
            data-progress="sm"
            value="64"
            max="100"
          ></progress>
          <h4 className="ui-heading" data-heading="sm">
            výchozí
          </h4>
          <progress className="ui-progress" value="26" max="100"></progress>
          <h4 className="ui-heading" data-heading="sm">
            lg
          </h4>
          <progress
            className="ui-progress"
            data-progress="lg"
            value="78"
            max="100"
          ></progress>
          <h4 className="ui-heading" data-heading="sm">
            xl
          </h4>
          <progress
            className="ui-progress"
            data-progress="xl"
            value="32"
            max="100"
          ></progress>

          <h3 className="ui-heading pt-20" data-heading="md">
            Indeterminate
          </h3>
          <h4 className="ui-heading" data-heading="sm">
            sm
          </h4>
          <progress
            className="ui-progress"
            data-progress="sm"
            indeterminate="true"
          ></progress>
          <h4 className="ui-heading" data-heading="sm">
            výchozí
          </h4>
          <progress className="ui-progress" indeterminate="true"></progress>
          <h4 className="ui-heading" data-heading="sm">
            lg
          </h4>
          <progress
            className="ui-progress"
            data-progress="lg"
            indeterminate="true"
          ></progress>
          <h4 className="ui-heading" data-heading="sm">
            xl
          </h4>
          <progress
            className="ui-progress"
            data-progress="xl"
            indeterminate="true"
          ></progress>
        </div>
      </div>
    </AppLayout>
  );
}

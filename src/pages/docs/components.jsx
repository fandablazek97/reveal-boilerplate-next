// Stránka sloužící pouze pro konfiguraci komponentů, vzhledu a celkovou ukázku
// Po konfiguraci soubor smazat

// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";
import Hero from "components/Hero";
import Button from "components/ui/Button";
import ButtonOutline from "components/ui/ButtonOutline";
import Badge from "components/ui/Badge";
import Group from "components/ui/Group";
import Alert from "components/ui/Alert";
import Quote from "components/ui/Quote";
import Accordion from "components/ui/Accordion";
import { Tabs, Tab } from "components/ui/Tabs";
import {
  Addon,
  Date,
  File,
  Checkbox,
  Input,
  InputFloating,
  Number,
  Radio,
  Select,
  Switch,
  Textarea,
  TextareaFloating,
} from "components/ui/inputs";
import ButtonClose from "components/ui/ButtonClose";

// Icons
import { HiUser, HiOutlineMail, HiPhone } from "react-icons/hi";

export default function componentsPage() {
  return (
    <AppLayout>
      <Seo
        title="React komponenty"
        description="Ukázka znovu použitelných react komponentů"
      />

      <Hero
        title="React komponenty"
        subtitle="Ukázka znovu použitelných react komponentů"
      />

      {/* Základní komponenty */}
      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading" data-heading="xl">
          Základní komponenty
        </h2>
      </div>

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading" data-heading="lg">
          Tlačítka
        </h2>
        <div className="flex flex-wrap gap-5 my-5">
          <Button as="button">Flat tlačítko</Button>
          <Button as="button" IconLeft={<HiPhone />}>
            With icon
          </Button>
          <Button isLoading={true}>Loading</Button>
          <Button as="button" isDisabled={true}>
            Disabled
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 my-5">
          <ButtonOutline as="button">Outline Tlačítko</ButtonOutline>
          <ButtonOutline as="button" IconLeft={<HiPhone />}>
            with icon
          </ButtonOutline>
          <ButtonOutline isLoading={true}>Loading</ButtonOutline>
          <ButtonOutline isDisabled={true}>Disabled</ButtonOutline>
        </div>
      </div>

      <div className="ui-wrapper mb-28">
        <h3 className="ui-heading">Tlačítka - velikosti</h3>
        <div className="flex gap-5 flex-wrap my-5">
          <div className="flex items-start">
            <Button as="button" size="sm">
              Flat sm
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button">Flat md</Button>
          </div>
          <div className="flex items-start">
            <Button as="button" size="lg">
              Flat lg
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" size="xl">
              Flat xl
            </Button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap mt-12 mb-5">
          <div className="flex items-start">
            <ButtonOutline as="button" size="sm">
              Outline sm
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button">Outline md</ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" size="lg">
              Outline lg
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" size="xl">
              Outline xl
            </ButtonOutline>
          </div>
        </div>
      </div>

      <div className="ui-wrapper mb-28">
        <h3 className="ui-heading">Tlačítka - barvy</h3>
        <div className="flex gap-5 flex-wrap my-5">
          <div className="flex items-start">
            <Button as="button">Primary</Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="secondary">
              Secondary
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="success">
              Success
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="warning">
              Warning
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="info">
              Info
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="black">
              Black
            </Button>
          </div>
          <div className="flex items-start">
            <Button as="button" color="white">
              White
            </Button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap mt-12 mb-5">
          <div className="flex items-start">
            <ButtonOutline as="button">Primary</ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="secondary">
              Secondary
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="success">
              Success
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="error">
              Error
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="warning">
              Warning
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="info">
              Info
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="black">
              Black
            </ButtonOutline>
          </div>
          <div className="flex items-start">
            <ButtonOutline as="button" color="white">
              White
            </ButtonOutline>
          </div>
        </div>
      </div>

      <div className="ui-wrapper my-28">
        <h2 className="ui-heading" data-heading="lg">
          Štítky
        </h2>
        <div className="flex flex-wrap gap-5 my-5">
          <Badge color="primary">primary</Badge>
          <Badge color="secondary">secondary</Badge>
          <Badge color="success">success</Badge>
          <Badge color="error">error</Badge>
          <Badge color="warning">warning</Badge>
          <Badge color="info">info</Badge>
          <Badge color="gray">gray</Badge>
        </div>
      </div>

      <div className="ui-wrapper my-28">
        <h2 className="ui-heading" data-heading="lg">
          Skupiny
        </h2>
        <Group className="my-10">
          <Button as="button">left</Button>
          <Button as="button">middle</Button>
          <Button as="button">right</Button>
        </Group>
        <Group className="my-10">
          <ButtonOutline as="button">left</ButtonOutline>
          <ButtonOutline as="button">middle</ButtonOutline>
          <ButtonOutline as="button">right</ButtonOutline>
        </Group>
        <Group className="my-10">
          <Badge color="success">Verze</Badge>
          <Badge color="info">1.0.0</Badge>
        </Group>
      </div>

      <div className="ui-wrapper my-28 space-y-5">
        <h2 className="ui-heading" data-heading="lg">
          Upozornění
        </h2>
        <Alert color="success">
          <h3 className="ui-heading">Super!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium corporis cum. Ipsa libero cumque officiis consectetur
            quod nobis. Magnam.
          </p>
        </Alert>
        <Alert color="error">
          <h3 className="ui-heading">Chyba!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium corporis cum. Ipsa libero cumque officiis consectetur
            quod nobis. Magnam.
          </p>
        </Alert>
        <Alert color="warning">
          <h3 className="ui-heading">Pozor!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium corporis cum. Ipsa libero cumque officiis consectetur
            quod nobis. Magnam.
          </p>
        </Alert>
        <Alert color="info">
          <h3 className="ui-heading">Info...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium corporis cum. Ipsa libero cumque officiis consectetur
            quod nobis. Magnam.
          </p>
        </Alert>
        <Alert color="gray">
          <h3 className="ui-heading">Gray</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium corporis cum. Ipsa libero cumque officiis consectetur
            quod nobis. Magnam.
          </p>
        </Alert>
      </div>

      <div className="ui-wrapper my-28">
        <h2 className="ui-heading" data-heading="lg">
          Citace
        </h2>
        <Quote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            odit atque omnis harum a deleniti quasi quisquam provident quam ad
            voluptas mollitia, reprehenderit eaque numquam obcaecati molestiae
            laudantium corrupti rem laborum, veniam tempora. Dolorum aliquam
            nemo quasi, harum porro eligendi.
          </p>
        </Quote>
        <Quote name="Jméno Příjmení" className="mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            odit atque omnis harum a deleniti quasi quisquam provident quam ad
            voluptas mollitia, reprehenderit eaque numquam obcaecati molestiae
            laudantium corrupti rem laborum, veniam tempora. Dolorum aliquam
            nemo quasi, harum porro eligendi.
          </p>
        </Quote>
      </div>

      {/* Accordion & Tabs */}
      <div className="ui-wrapper my-28">
        <h2 className="ui-heading text-center" data-heading="xl">
          Accordion & Tabs
        </h2>
      </div>

      <div className="ui-wrapper my-28" data-wrapper="sm">
        <h2 className="ui-heading text-center" data-heading="lg">
          Accordion
        </h2>
        <Accordion id="acc-q-1" title="My awesome question #1" isOpen={true}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-2" title="My awesome question #2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-3" title="My awesome question #3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-4" title="My awesome question #4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
      </div>

      <div className="ui-wrapper my-28" data-wrapper="sm">
        <h2 className="ui-heading text-center" data-heading="lg">
          Tabs
        </h2>
        <Tabs>
          <Tab title="Záložka">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto quasi voluptatem qui doloribus neque illum repellendus
              ullam dolore consequatur?
            </p>
          </Tab>
          <Tab title="Záložka 2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perspiciatis, earum culpa aperiam eligendi non
              repellendus. Ea, quae. Ducimus, explicabo, eos inventore rem
              fugiat maxime consequatur optio neque excepturi facilis
              exercitationem? Corrupti, quae? Magnam consectetur iusto sequi,
              suscipit dicta modi.
            </p>
          </Tab>
          <Tab title="Záložka 3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perspiciatis, earum culpa aperiam eligendi non
              repellendus. Ea, quae. Ducimus, explicabo, eos inventore rem
              fugiat maxime consequatur optio neque excepturi facilis
              exercitationem?
            </p>
          </Tab>
        </Tabs>
      </div>

      {/* Formuláře */}
      <div className="ui-wrapper my-28" data-wrapper="sm">
        <h2 className="ui-heading" data-heading="xl">
          Formuláře
        </h2>
      </div>

      <div className="ui-wrapper my-28" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Příklad formuláře
        </h3>
        <form className="grid grid-cols-1 gap-8 mt-8">
          <InputFloating
            id="form-name-surname"
            name="full-name"
            label="Jméno a příjmení"
            isRequired={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InputFloating
              type="email"
              id="form-mail"
              name="mail"
              label="Email"
              isRequired={true}
            />
            <InputFloating
              type="tel"
              id="form-tel"
              name="phone"
              label="Telefon"
              isRequired={true}
            />
          </div>
          <div>
            <span className="text-lg text-rich">Kdy je vaše událost?</span>
            <Date
              className="mt-4"
              id="form-date"
              name="date"
              label="Vyberte datum"
              isRequired={true}
            />
          </div>
          <div>
            <span className="text-lg text-rich">
              O jaký druh události se jedná?
            </span>
            <Select
              className="mt-4"
              id="form-seleft"
              name="options"
              label="Vyberte jednu z možností"
              isRequired={true}
            >
              <option value="Mercedes">Firemní</option>
              <option value="Bmw">Soukromá</option>
            </Select>
          </div>
          <TextareaFloating
            id="form-message"
            name="message"
            label="Vaše zpráva"
          />
          <Checkbox id="form-gdpr" name="gdpr" isRequired={true}>
            Souhlasím se zpracováním osobních údajů
          </Checkbox>
        </form>
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Input & Input floating
        </h3>
        <Input
          type="text"
          id="name-surname"
          name="name-surname"
          label="Jméno a příjmení"
        />
        <InputFloating
          id="name-surname-floating"
          name="name-surname-floating"
          label="Jméno a příjmení"
          isRequired={true}
        />
        <Input
          type="text"
          id="input-disabled"
          name="input-disabled"
          label="disabled"
          isDisabled={true}
        />
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Group + Addon + Inputs
        </h3>
        <Group>
          <Addon>www.</Addon>
          <Input id="website" name="website" label="Web" />
          <Addon>.com</Addon>
        </Group>
        <Group>
          <Addon>
            <HiPhone />
          </Addon>
          <Input id="tel" name="tel" label="Telefonní číslo" />
        </Group>
        <Group>
          <Addon>
            <HiUser />
          </Addon>
          <Input id="user" name="user" label="Uživatelské jméno" />
        </Group>
        <Group>
          <Addon>
            <HiOutlineMail />
          </Addon>
          <Input id="email" name="email" label="E-mail" />
        </Group>
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Textarea & Textarea floating
        </h3>
        <Textarea id="message" name="message" label="Vaše zrpáva" />
        <TextareaFloating
          id="message-disabled-floating"
          name="message-disabled-floating"
          label="Zpráva"
          isRequired={true}
        />
        <Textarea
          id="message-disabled"
          name="message-disabled"
          label="Textarea disabled"
          isDisabled={true}
        />
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Input type file
        </h3>
        <File id="file-ipload" name="file-upload" label="nahrajte soubor" />
        <File
          id="file-ipload-disabled"
          name="file-upload-disabled"
          label="nahrajte soubor"
          isDisabled={true}
        />
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Input type date
        </h3>
        <Date id="date-input" name="date" label="vyberte datum" />
        <Date
          id="date-input-disabled"
          name="date-disabled"
          label="vyberte datum"
          isDisabled={true}
        />
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Select
        </h3>
        <Select
          id="select-id"
          name="favorite-car"
          label="vyberte oblíbenou značku auta"
        >
          <option value="Mercedes">Mercedes</option>
          <option value="Bmw">Bmw</option>
          <option value="Audi">Audi</option>
          <option value="Tesla">Tesla</option>
          <option value="Volvo">Volvo</option>
        </Select>
        <Select
          id="select-id"
          name="favorite-car"
          label="vyberte oblíbenou značku auta"
          isDisabled={true}
        >
          <option value="Mercedes">Mercedes</option>
          <option value="Bmw">Bmw</option>
          <option value="Audi">Audi</option>
          <option value="Tesla">Tesla</option>
          <option value="Volvo">Volvo</option>
        </Select>
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Input type number
        </h3>
        <Number
          id="number-input-id"
          name="number"
          label="vyberte číslo"
          defaultValue="10"
        />
        <Number
          id="number-input-id"
          name="number"
          label="vyberte číslo"
          defaultValue="10"
          isDisabled={true}
        />
      </div>

      <div className="ui-wrapper my-28 space-y-8" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Checkbox & radio & switch
        </h3>
        <Checkbox id="checkbox" name="checkbox-name">
          Podmínky gdpr
        </Checkbox>
        <Checkbox id="checkbox-disabled" name="checkbox-name" isDisabled={true}>
          Podmínky gdpr - disabled
        </Checkbox>
        <Radio id="radio" name="radio-name">
          Vyberte možnost
        </Radio>
        <Radio id="radio-disabled" name="radio-name" isDisabled={true}>
          Vyberte možnost - disabled
        </Radio>
        <Switch id="switch" name="switch-name">
          Podmínky gdpr
        </Switch>
        <Switch id="switch-disabled" name="switch-name" isDisabled={true}>
          Podmínky gdpr - disabled
        </Switch>
      </div>

      {/* Menu */}
      <div className="ui-wrapper my-28" data-wrapper="sm">
        <h3 className="ui-heading" data-heading="lg">
          Close button
        </h3>
        <ButtonClose />
      </div>
    </AppLayout>
  );
}

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Components
import { InputFloating, TextareaFloating } from "components/ui/inputs";
import Button from "components/ui/Button";

// Global components
import FormAlertSuccess from "components/forms/FormAlertSuccess";
import FormAlertError from "components/forms/FormAlertError";
import FormCheckboxGdpr from "components/forms/FormCheckboxGdpr";

export default function FormContactTest() {
  // Ref
  const refHoneypot = useRef(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current.value;

    if (honeypot === "" || honeypot === null) {
      emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
        (result) => {
          setmailSent(true);
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          setFormError(true);
          setIsLoading(false);
        }
      );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      className="ui-form-filled pt-6 space-y-8"
      aria-label="Kontaktní formulář"
    >
      <InputFloating
        type="text"
        name="name"
        id="name"
        label="Jméno a příjmení"
        isRequired={true}
      />

      {/* Honeypot - anti spam */}
      <div className="lib-input-hp">
        <input
          type="text"
          placeholder="surname"
          id="surname"
          ref={refHoneypot}
        />
        <label htmlFor="website">Příjmení</label>
      </div>
      {/* ---- Honeypot - anti spam ---- */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputFloating
          type="mail"
          name="mail"
          id="mail"
          label="E-mail"
          isRequired={true}
        />

        <InputFloating type="tel" name="tel" id="tel" label="Telefon" />
      </div>

      <TextareaFloating
        name="message"
        id="message"
        cols="30"
        rows="10"
        label="Vaše zpráva"
        isRequired={true}
      />

      <FormCheckboxGdpr id="gdpr" name="gdpr" />

      <Button as="button" type="submit" isLoading={isLoading} text="Odeslat">
        Odeslat
      </Button>

      <div>
        {mailSent ? <FormAlertSuccess /> : null}
        {formError ? <FormAlertError /> : null}
      </div>
    </form>
  );
}

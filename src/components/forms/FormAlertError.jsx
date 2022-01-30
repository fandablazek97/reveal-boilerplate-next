import Alert from "components/ui/Alert";
import { IoAlertCircle } from "react-icons/io5";

export default function FormAlertError() {
  return (
    <Alert color="error" className="flex items-center">
      <IoAlertCircle className="text-3xl md:text-4xl shrink-0 mr-4" />
      <span className="text-lg">
        E-mail nebyl odeslán. Zkuste to znovu později nebo zvolte jinou možnost
        kontaktu.
      </span>
    </Alert>
  );
}

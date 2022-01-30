import Alert from "components/ui/Alert";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function FormAlertSuccess() {
  return (
    <Alert color="success" className="flex items-center">
      <IoCheckmarkCircle className="text-3xl md:text-4xl shrink-0 mr-4" />
      <span className="text-lg">Děkujeme. Váš e-mail byl úspěšně odeslán.</span>
    </Alert>
  );
}

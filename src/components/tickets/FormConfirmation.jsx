import FormPaymentCard from "../form/FormPaymentCard";
import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

const FormConfirmation = () => {
  return (
    <div>
      <FormTicketBig theme="confirmed" />
      <FormTicketSmall theme="confirmed" />
    </div>
  );
};

export default FormConfirmation;

import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

const FormConfirmation = () => {
  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform ">
      <FormTicketBig theme="confirmed" />
      <FormTicketSmall theme="confirmed" />
    </div>
  );
};

export default FormConfirmation;

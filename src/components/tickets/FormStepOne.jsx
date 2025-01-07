import { TicketData } from "@/stores/TicketState";
import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

// Handles the first step of the form, allowing users to select general and VIP tickets.
const FormStepOne = () => {
  // Extracting ticket data from global state
  const { incrGeneral_tickets, incrVIP_tickets } = TicketData();

  return (
    <fieldset
      className="_Ticket_component_ grid mob:grid-cols-[auto,1fr] gap-y-s gap-x-m py-m m-auto transition-transform "
      aria-labelledby="form-header"
    >
      {/* General Ticket Selection */}
      <FormTicketBig theme="general" />
      <FormTicketSmall
        price="799"
        theme="ticket"
        onclickEvent={incrGeneral_tickets}
      />

      {/* VIP Ticket Selection */}
      <FormTicketBig theme="vip" />
      <FormTicketSmall
        price="1.299"
        theme="ticket"
        onclickEvent={incrVIP_tickets}
      />
    </fieldset>
  );
};

export default FormStepOne;

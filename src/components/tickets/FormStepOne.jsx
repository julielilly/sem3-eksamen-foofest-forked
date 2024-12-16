import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";
import { TicketData } from "@/stores/TicketState";

const FormStepOne = () => {
  const { general_tickets, vip_tickets, incrGeneral_tickets, incrVIP_tickets } = TicketData();
  console.log(general_tickets);

  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform h-fit ">
      <FormTicketBig theme="general" />
      <FormTicketSmall quantity={general_tickets + 1} price="799" theme="ticket" onclickEvent={incrGeneral_tickets} />

      <FormTicketBig theme="vip" />
      <FormTicketSmall quantity={vip_tickets + 1} price="1299" theme="ticket" onclickEvent={incrVIP_tickets} />
    </div>
  );
};

export default FormStepOne;

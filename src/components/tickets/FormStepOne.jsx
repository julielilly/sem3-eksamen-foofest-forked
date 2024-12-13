import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

const FormStepOne = () => {
  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform h-fit ">
      <FormTicketBig theme="general" />
      <FormTicketSmall quantity={"1"} price="200" theme="ticket" />

      <FormTicketBig theme="vip" />
      <FormTicketSmall quantity={"1"} price="800" theme="ticket" />
    </div>
  );
};

export default FormStepOne;

import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

const FormStepOne = ({ general }) => {
  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform ">
      <FormTicketBig theme="general" />
      <FormTicketSmall quantity={"1"} price="200" theme="ticket" />
    </div>
  );
};

export default FormStepOne;

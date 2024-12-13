import FormTicketBorder from "../form/FormTicketBig";
import FormTicketSmallBorder from "../form/FormTicketSmall";

const FormStepOne = () => {
  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform ">
      <FormTicketBorder />
      <FormTicketSmallBorder />
    </div>
  );
};

export default FormStepOne;

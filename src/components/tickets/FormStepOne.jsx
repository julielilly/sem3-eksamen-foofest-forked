import FormTicketBig from "../form/FormTicketBig";
import FormTicketSmall from "../form/FormTicketSmall";

const FormStepOne = () => {
  return (
    <div className="_Ticket_component_  grid mob:grid-cols-[auto,1fr]  gap-xs py-m  m-auto transition-transform ">
      <FormTicketBig />
      <FormTicketSmall />
    </div>
  );
};

export default FormStepOne;

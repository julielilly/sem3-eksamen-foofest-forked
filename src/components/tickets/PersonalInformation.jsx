import { TicketData } from "@/stores/TicketState";

const PersonalInformation = ({ validationErrors, register }) => {
  const { participants, updateParticipant, addParticipant } = TicketData();

  // Handler for input changes
  const handleChange = (index, field, value) => {
    if (participants.length <= index) {
      addParticipant(); // Add a new participant if the array is smaller
    }
    updateParticipant(index, field, value); // Update participant information
  };

  return (
    <fieldset className="_step_3_ px-m" aria-labelledby="personal-info-header">
      <h2 id="personal-info-header" className="font-germania-one text-step-2 text-center before:w-1/2">
        Personal information
      </h2>

      {Array.from({ length: participants.length }, (_, index) => (
        <div key={index} className="_personal_information_ grid py-s">
          <h3>{index === 0 ? "Buyer Details" : `Guest ${index} Details`}</h3>

          {/* Full name field */}
          <div>
            <label htmlFor={`name-${index}`}>Full name</label>
            <input id={`name-${index}`} type="text" {...register(`participants.${index}.name`)} value={participants[index]?.name || ""} onChange={(e) => handleChange(index, "name", e.target.value)} />

            {validationErrors?.participants?.[index]?.name && <p className="error-message">{validationErrors?.participants?.[index]?.name?._errors[0]}</p>}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor={`email-${index}`}>E-mail</label>
            <input id={`email-${index}`} type="email" {...register(`participants.${index}.email`)} value={participants[index]?.email || ""} onChange={(e) => handleChange(index, "email", e.target.value)} />

            {validationErrors?.participants?.[index]?.email && <p className="error-message">{validationErrors?.participants?.[index]?.email?._errors[0]}</p>}
          </div>

          {/* Phone number field */}
          <div>
            <label htmlFor={`number-${index}`}>Phone Number</label>
            <input
              id={`number-${index}`}
              type="tel"
              {...register(`participants.${index}.number`)}
              value={
                participants[index]?.number
                  .replace(/[^0-9]/g, "") // this allows only numbers
                  .replace(/(\d{2})/g, "$1 ") // this adds space after every
                  .trim() || // remove any spaces before and after1
                ""
              }
              onChange={(e) => handleChange(index, "number", e.target.value.replace(/[^0-9]/g, ""))}
              maxLength={11}
            />

            {validationErrors?.participants?.[index]?.number && <p className="error-message">{validationErrors?.participants?.[index]?.number?._errors[0]}</p>}
          </div>
        </div>
      ))}
    </fieldset>
  );
};

export default PersonalInformation;

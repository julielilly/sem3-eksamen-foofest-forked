import FormTicketBorder from "./FormTicketBorder";

const FormTicketFlow = ({
  step,
  setSet,
  ticketData,
  setTicketData,
  campingAreas,
  handleReservation,
  handleSubmitPayment,
  handleParticipantChange,
  numberOfParticipants,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="[&>*]:border-2 [&>*]:border-foreground [&>*]:bg-white  [&>*]:py-s "
    >
      {step === 1 && (
        <fieldset>
          <div
            className="grid [&>*]:col-start-1
              grid-row-[1fr,1fr] place-items-center"
            aria-label="Select a general ticket"
          >
            <FormTicketBorder />
            <button
              className="border-2 border-black p-2 font-germania-one"
              onClick={() =>
                setTicketData({
                  ...ticketData,
                  general_tickets: ticketData.general_tickets + 1,
                })
              }
            >
              General Admission
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, laboriosam. Aspernatur asperiores iste amet.
            </p>
          </div>

          <div
            className="grid place-items-center"
            aria-label="Select a VIP admission ticket"
          >
            <FormTicketBorder />
            <button
              className="border-2 border-black p-2 font-germania-one"
              onClick={() =>
                setTicketData({
                  ...ticketData,
                  vip_tickets: ticketData.vip_tickets + 1,
                })
              }
            >
              VIP
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, laboriosam. Aspernatur asperiores iste amet.
            </p>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="border-2 border-foreground bg-white  py-s ">
          Step 2
          <h2 className="font-germania-one text-title px-m ">
            Select camping area
          </h2>
          <div className="_camping_area_ grid grid-cols-2 gap-2 ">
            {campingAreas.map((area, index) => {
              // styles buttons depending on if they are to left or right, and depending on whether total amount of buttons are odd/even
              const isLast = index === campingAreas.length - 1;
              const isOdd = campingAreas.length % 2 !== 0;

              // specific style for the LAST camping area button IF total areas are odd numbered.
              const buttonClasses = `
        ${isLast && isOdd ? "col-span-2 halfround-right  " : ""}
        ${
          !isLast && index % 2 === 0
            ? "halfround-right border-l-0" // styles odd buttons
            : "halfround-left border-r-0" // styles even buttons
        } 
        ${
          ticketData.camping_area === area.area
            ? "bg-foreground text-background"
            : "bg-background text-foreground"
        }
          text-center hover:bg-lightblue hover:text-white
      `;
              return (
                <button
                  className={buttonClasses}
                  key={area.area}
                  onClick={() =>
                    setTicketData({ ...ticketData, camping_area: area.area })
                  }
                >
                  {area.area}
                  <div>Available spots: {area.available}</div>
                </button>
              );
            })}
            <div className="px-m col-span-full">
              Selected area: {ticketData.camping_area}
            </div>
          </div>
          <div className="_tent_selection_  px-m text-center">
            <h3 className="text-step-1">Rent a Tent</h3>
            <div>
              <input
                className="appearance-none"
                type="checkbox"
                id="two-person-tent"
                checked={ticketData.two_person_tents > 0}
                onChange={() =>
                  setTicketData({
                    ...ticketData,
                    two_person_tents: ticketData.two_person_tents + 1,
                  })
                }
              />

              <label htmlFor="two-person-tent">Add 2-person Tent</label>
            </div>

            <div>
              <input
                className="appearance-none"
                type="checkbox"
                id="three-person-tent"
                checked={ticketData.three_person_tents > 0}
                onChange={() =>
                  setTicketData({
                    ...ticketData,
                    three_person_tents: ticketData.three_person_tents + 1,
                  })
                }
              />
              <label htmlFor="three-person-tent">Add 3-person Tent</label>
            </div>
            <div>
              <p>2-person tents: {ticketData.two_person_tents}</p>
              <p>3-person tents: {ticketData.three_person_tents}</p>
            </div>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="px-m">
          <h2 className="font-germania-one text-step-2 text-center">
            Personal information
          </h2>
          {Array.from({ length: numberOfParticipants }, (_, index) => (
            <div key={index} className="grid">
              <legend className="text-step-1 text-center">
                {index === 0 ? "Buyer Details" : `Guest ${index} Details`}
              </legend>
              <label htmlFor={`full-name-${index}`}>Full name:</label>
              <input
                id={`full-name-${index}`}
                type="text"
                className="halfround-right bg-white text-foreground px-2xs"
                value={ticketData.participants[index]?.name || ""}
                onChange={(e) =>
                  handleParticipantChange(index, "name", e.target.value)
                }
              />
              <label htmlFor={`email-${index}`}>Email:</label>
              <input
                id={`email-${index}`}
                type="email"
                className="halfround-right bg-white text-foreground px-2xs"
                value={ticketData.participants[index]?.email || ""}
                onChange={(e) =>
                  handleParticipantChange(index, "email", e.target.value)
                }
              />
              <label id={`number-${index}`}>Phone Number:</label>
              <input
                id={`number-${index}`}
                type="number"
                className="halfround-right bg-white text-foreground px-2xs"
                value={ticketData.participants[index]?.number || ""}
                onChange={(e) =>
                  handleParticipantChange(index, "number", e.target.value)
                }
              />
            </div>
          ))}
        </fieldset>
      )}

      {step === 4 && <fieldset>Step 4</fieldset>}

      {step === 5 && <fieldset>Step 5</fieldset>}
    </form>
  );
};

export default FormTicketFlow;
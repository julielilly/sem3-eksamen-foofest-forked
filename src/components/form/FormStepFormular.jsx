const FormStepFormular = ({
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
      className="border-2 border-foreground bg-white  py-s mx-auto my-l"
    >
      <fieldset className="_step_2_select_camping_">
        <h2 className="before:w-1/2">Select camping area</h2>

        <div className="_camping_area_ grid grid-cols-2 gap-m py-m">
          {campingAreas.map((area, index) => {
            // styles buttons depending on if they are to left or right, and depending on whether total amount of buttons are odd/even
            const isLast = index === campingAreas.length - 1;
            const isOdd = campingAreas.length % 2 !== 0;

            // specific style for the LAST camping area button IF total areas are odd numbered.
            const buttonClasses = `
        ${
          isLast && isOdd
            ? "col-span-2 halfround-right border-r-2 min-w-[80%] m-auto"
            : ""
        }
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
          text-center hover:bg-lightblue hover:text-white text-normal font-bold tracking-wide py-2xs
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
                <div className=" text-xs font-normal tracking-none">
                  Available: {area.available}
                </div>
              </button>
            );
          })}
        </div>

        <div className="_tent_selection_  px-m text-center ">
          <h3 className="underline-border before:top-0">RENT A TENT</h3>

          <div className="_2-3_person_tent_ grid gap-s pb-s">
            <section className="flex justify-between items-center">
              <div>
                <input
                  className="appearance-none hidden"
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
                <label
                  htmlFor="two-person-tent"
                  className="text-normal tracking-wide"
                >
                  2-person tent
                </label>
                <p className="text-lightblue font-light italic">
                  200kr per tent
                </p>
              </div>
              <p>2-person tents: {ticketData.two_person_tents}</p>
            </section>
            <section className="flex justify-between items-center">
              <div>
                <input
                  className="appearance-none hidden"
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
                <label
                  htmlFor="three-person-tent"
                  className="text-normal tracking-wide"
                >
                  3-person tent
                </label>
                <p className="text-lightblue font-light italic">
                  300kr per tent
                </p>
              </div>
              <p>3-person tents: {ticketData.three_person_tents}</p>
            </section>
          </div>
          <div className="_add_green_camping_">
            <h3 className="underline-border before:top-0">ADDITIONAL</h3>
            <input type="checkbox" id="green-camp" />{" "}
            <label htmlFor="green-camp">Add green camping?</label>
          </div>
        </div>
      </fieldset>

      <fieldset className="px-m">
        <h2 className="font-germania-one text-step-2 text-center before:w-1/2">
          Personal information
        </h2>

        <div className="grid py-s odd:gap-2">
          <legend className="text-step-1 text-center"></legend>
          <label htmlFor={`full-name-`}>Full name:</label>
          <input
            id={`full-name-`}
            type="text"
            className="halfround-right bg-white text-foreground px-2xs"
          />

          <label htmlFor={`email-`}>Email:</label>
          <input
            id={`email-`}
            type="email"
            className="halfround-right bg-white text-foreground px-2xs"
          />
          <label id={`number-`}>Phone Number:</label>
          <input
            id={`number-`}
            type="tel"
            className="halfround-right bg-white text-foreground px-2xs"
          />
        </div>
      </fieldset>

      <fieldset>Step 4</fieldset>

      <fieldset>Step 5</fieldset>
    </form>
  );
};

export default FormStepFormular;

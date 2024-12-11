const FormCampingAreas = () => {
  return (
    <div>
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
    </div>
  );
};

export default FormCampingAreas;

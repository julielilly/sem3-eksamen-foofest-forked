import { useState } from "react";
import FormPaymentCard from "@/components/form/FormPaymentCard";

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
  const [expiry, setExpiry] = useState("");

  const yymmDateInput = (e) => {
    const value = e.target.value;
    const yymmDate = value
      .replace(/[^0-9/]/g, "") // this allows only numbers and "/"
      .replace(/(\d{2})(\d{2})/, "$1/$2"); // formats the input so it looks like mm/yy. if user writes "1234", this will split it into "12/34".

    setExpiry(yymmDate);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="border-2 border-foreground bg-white  py-m mx-auto my-l"
    >
      {/* step 2  */}
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

      {/* step 3 */}
      <fieldset className="_step_3_ px-m">
        <h2 className="font-germania-one text-step-2 text-center before:w-1/2">
          Personal information
        </h2>

        <div className="_personal_information_ grid py-s ">
          <label htmlFor={`full-name`}>Full name:</label>
          <input id={`full-name`} type="text" />

          <label htmlFor={`email`}>Email:</label>
          <input id={`email`} type="email" />
          <label id={`number`}>Phone number:</label>
          <input id={`number`} type="tel" />
        </div>
      </fieldset>

      {/* step 4  */}
      <fieldset className="_step_4_ px-m">
        <h2 className="font-germania-one text-step-2 text-center before:w-1/2">
          Payment details
        </h2>

        <section className="underline-border pt-2xs grid grid-cols-[1fr,1fr] [&>*]:text-nowrap">
          <h3 className="col-span-full pb-0">PAYMENT OPTION</h3>

          <div>
            <input
              type="radio"
              id="payment-mobilepay"
              name="payment"
              value="mobilepay"
              className="_payment_option_"
            />
            <label htmlFor="payment-mobilepay" className="_payment_option_">
              Mobilepay
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="payment-card"
              name="payment"
              value="card"
              className="_payment_option_"
              defaultChecked
            />
            <label htmlFor="payment-card" className="_payment_option_">
              Card payment
            </label>
          </div>
        </section>

        <div className="_payment_layout_ ">
          {/* mobilepay payment details */}
          <div id="mobilepay-details ">
            <label htmlFor="mobilepay-number">MobilePay Number:</label>
            <input type="tel" id="mobilepay-number" name="mobilepay-number" />
          </div>

          {/* card payment details */}
          <div id="card-payment-details grid grid-cols-[1fr]">
            <FormPaymentCard />

            <label htmlFor="card-number">Card Number:</label>
            <input
              type="text"
              inputMode="numeric"
              id="card-number"
              name="card-number"
            />

            <label htmlFor="card-name">Cardholder Name:</label>
            <input type="text" id="card-name" name="card-name" />

            <section className="grid grid-cols-2 ">
              <label htmlFor="card-expiry" className="row-start-1 ">
                Expiry Date:
              </label>
              <input
                type="text"
                inputMode="numeric"
                id="card-expiry"
                name="card-expiry"
                maxLength="5"
                className="_uniform_input_ border-2 border-black border-r-0 bg-transparent row-start-2 px-xs"
                onInput={yymmDateInput}
                value={expiry}
                placeholder="MM/YY"
              />

              <label htmlFor="card-cvc">Security code:</label>
              <input
                type="text"
                inputMode="numeric"
                id="card-cvc"
                name="card-cvc"
                maxLength="3"
              />
            </section>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default FormStepFormular;
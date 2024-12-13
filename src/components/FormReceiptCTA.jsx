"use client";

import ButtonRounded from "./ButtonRounded";

const FormReceiptCTA = ({ setStep, step, handleReservation }) => {
  return (
    <ButtonRounded>
      {(step === 1 || step === 3) && (
        <button
          onClick={() => {
            setStep(step + 1);
            console.log("click");
          }}
        >
          {step === 1 && `Choose camping`}
        </button>
      )}
      {step === 2 && (
        <button onClick={() => handleReservation()}>Reserve tickets</button>
      )}
      {step === 3 && (
        <input type="submit" form="details_form" value="Go to payment"></input>
      )}
      {step === 4 && (
        <input
          type="submit"
          form="payment_form"
          value="Proceed to checkout"
        ></input>
      )}
    </ButtonRounded>
  );
};

export default FormReceiptCTA;

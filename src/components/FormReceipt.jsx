"use client";

import ButtonRounded from "./ButtonRounded";

const FormReceipt = ({ setStep, step, btn_text }) => {
  return (
    <section className="_receipt_component_ bg-white border-2 border-foreground pt-xs pb-m px-m min-w-fit w-auto max-w-96 ">
      <h2 className="_receipt_title_ text-center text-step-2 font-bold border-b-2 border-foreground w-[50%] m-auto">Basket</h2>
      <div className="_quantity_tickets border-b-2 border-foreground border:w-[90%] py-s [&>*]:py-3xs">
        <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
          <h3 className="row-start-1 font-bold">General admission</h3>
          <p className="row-start-2">400kr</p>
          <div className=" row-span-full self-center">- 1 +</div>
        </div>
      </div>
      <div>
        <div className="_overview_total_price_ py-s [&>*]:py-3xs">
          <div className="flex justify-between">
            <p>Price + quantity tickets</p>
            <p>300kr</p>
          </div>
          <div className="flex justify-between">
            <p>Booking free</p>
            <p>99kr</p>
          </div>
        </div>
        <div className="_tital_price_ flex justify-between pb-m font-bold text-step-1">
          <p>Total</p>
          <p>3000kr</p>
        </div>
      </div>
      <ButtonRounded>
        <button onClick={() => setStep(step + 1)}>
          {step === 1 && `Choose camping`}
          {step === 2 && `Reserve tickets`}
          {step === 3 && `Go to payment`}
          {step === 4 && `Proceed to checkout`}
        </button>
      </ButtonRounded>
    </section>
  );
};

export default FormReceipt;

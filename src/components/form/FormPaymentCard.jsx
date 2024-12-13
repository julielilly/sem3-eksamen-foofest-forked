const PaymentCard = () => {
  return (
    <section className="_payment_card_component_ card-width mx-auto border-2 border-black rounded-3xl grid grid-rows-[1fr,1fr] aspect-[1.5/1] py-xs px-s">
      <p className="_card_number_ row-start-1 self-end font-hind-madurai text-step-2 font-b">
        **** **** **** ****
      </p>
      <section className="row-start-2 grid grid-cols-[1fr,auto] grid-rows-[1fr] self-center gap-2">
        <p className="_card_name_ font-bold text-step-1">CARDHOLDER NAME</p>
        <section className="grid">
          <p className="_card_valid_ font-bold ">Valid thru</p>
          <section className="flex">
            <p>**</p>/<p>**</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PaymentCard;

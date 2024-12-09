import ButtonRounded from "./ButtonRounded";

const FormReceipt = () => {
  return (
    <section className="border-2 border-foreground w-fit py-xs px-m ">
      <h2 className="text-center border-b-2 border-foreground w-[50%] m-auto">
        Basket
      </h2>
      <div className="_quantity_tickets border-b-2 border-foreground w-[90%]">
        <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,1fr] grid-rows-[1fr,1fr]">
          <h3 className="row-start-1">General admission</h3>
          <p className="row-start-2">400kr</p>
          <div className=" row-span-full self-center">- 1 + komponent</div>
        </div>
      </div>
      <div>
        <div className="_overview_total_price_">
          <div>
            <p>Name and quantity of tickets</p>
            <p>price of tickets</p>
          </div>
          <div>booking free</div>
        </div>
        <div className="_tital_price_ flex justify-between">
          <p>Total</p>
          <p>3000kr</p>
        </div>
      </div>
      <ButtonRounded>Choose camping</ButtonRounded>
    </section>
  );
};

export default FormReceipt;

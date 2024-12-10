"use client";

import FormReceiptCTA from "./FormReceiptCTA";
import Image from "next/image";
import basketImage from "@/app/assets/basket.png";

const FormReceipt = ({ setStep, step, handleReservation, ticketData, setTicketData }) => {
  const generalTicketPrice = 799;
  const totalGeneralTicketPrice = generalTicketPrice * ticketData.general_tickets;
  const vipTicketPrice = 1299;
  const totalVipTicketPrice = vipTicketPrice * ticketData.vip_tickets;
  const bookingFee = 99;

  return (
    <section className="_receipt_component_ bg-white border-2 border-foreground pt-xs pb-m px-m min-w-fit w-auto max-w-96 ">
      <h2 className="_receipt_title_ text-center text-step-2 font-bold border-b-2 border-foreground w-[50%] m-auto">Basket</h2>

      <div className="_quantity_tickets border-b-2 border-foreground border:w-[90%] py-s [&>*]:py-3xs">
        {ticketData.general_tickets === 0 && ticketData.vip_tickets === 0 && (
          <div className="w-full flex flex-col gap-xs items-center">
            <Image src={basketImage} width={100} alt="basket" />
            <p className="text-center">Add your tickets to the basket</p>
          </div>
        )}
        {ticketData.general_tickets >= 1 && (
          <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
            <h3 className="row-start-1 font-bold">General admission</h3>
            <p className="row-start-2">
              <span>{totalGeneralTicketPrice}</span>kr
            </p>
            <div className=" row-span-full self-center flex gap-2xs">
              <button onClick={() => setTicketData({ ...ticketData, general_tickets: ticketData.general_tickets - 1 })}>-</button>
              <span className="w-[2ch] text-center">{ticketData.general_tickets}</span>
              <button onClick={() => setTicketData({ ...ticketData, general_tickets: ticketData.general_tickets + 1 })}>+</button>
            </div>
          </div>
        )}
        {ticketData.vip_tickets >= 1 && (
          <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
            <h3 className="row-start-1 font-bold">VIP</h3>
            <p className="row-start-2">
              <span>{totalVipTicketPrice}</span>kr
            </p>
            <div className=" row-span-full self-center flex gap-2xs">
              <button onClick={() => setTicketData({ ...ticketData, vip_tickets: ticketData.vip_tickets - 1 })}>-</button>
              <span className="w-[2ch] text-center">{ticketData.vip_tickets}</span>
              <button onClick={() => setTicketData({ ...ticketData, vip_tickets: ticketData.vip_tickets + 1 })}>+</button>
            </div>
          </div>
        )}
      </div>

      {ticketData.general_tickets !== 0 || ticketData.vip_tickets !== 0 ? (
        <div>
          <div className="_overview_total_price_ py-s [&>*]:py-3xs">
            <div className="flex justify-between">
              <p>
                Tickets x <span>{ticketData.general_tickets + ticketData.vip_tickets}</span>
              </p>
              <p>
                <span>{totalGeneralTicketPrice + totalVipTicketPrice}</span>kr
              </p>
            </div>
            <div className="flex justify-between">
              <p>Booking free</p>
              <p>{bookingFee}</p>
            </div>
          </div>
          <div className="_tital_price_ flex justify-between pb-m font-bold text-step-1">
            <p>Total</p>
            <p>
              <span>{totalGeneralTicketPrice + totalVipTicketPrice + bookingFee}</span>
              kr
            </p>
          </div>
        </div>
      ) : (
        <div className="py-s"></div>
      )}

      <FormReceiptCTA setStep={setStep} step={step} handleReservation={handleReservation} />
    </section>
  );
};

export default FormReceipt;

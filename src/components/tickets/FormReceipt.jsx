"use client";

import FormReceiptCTA from "./FormReceiptCTA";
import Image from "next/image";
import basketImage from "@/app/assets/basket.png";
import { useEffect } from "react";
import { validationSchemaStep1, validationSchemaStep2, validationSchemaStep3, validationSchemaStep4 } from "@/schemas/validationSchema";
import { PaymentCardInput } from "@/stores/PaymentCardInput";
import { TicketData } from "@/stores/TicketState";
import ValidationErrors from "./ValidationErrors";

const FormReceipt = ({ loading, setStep, step, handleReservation, validationErrors, isButtonDisabled, setIsButtonDisabled, setValidationErrors, tents, handleSubmitPayment }) => {
  const { participants, general_tickets, vip_tickets, incrGeneral_tickets, incrVIP_tickets, decrGeneral_tickets, decrVIP_tickets, camping_area, three_person_tents, two_person_tents, green_camping } = TicketData();
  const { cardNumber, cardName, expiryDate, cardCvc } = PaymentCardInput();

  const generalTicketPrice = 799;
  const totalGeneralTicketPrice = generalTicketPrice * general_tickets;
  const vipTicketPrice = 1299;
  const totalVipTicketPrice = vipTicketPrice * vip_tickets;
  const bookingFee = 99;

  const twoPersonTentPrice = 299;
  const totalTwoPersonTentPrice = twoPersonTentPrice * two_person_tents;
  const threePersonTentPrice = 399;
  const totalThreePersonTentPrice = threePersonTentPrice * three_person_tents;

  const greenCampingPrice = 249;

  const numberOfParticipants = general_tickets + vip_tickets;

  // function to scroll to the top when step changes
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // form validation logic
  const validateStep = async () => {
    let errors = null;
    setIsButtonDisabled(true); // Disable button until validation passes

    if (step === 1) {
      //returns either error or succes
      const result = validationSchemaStep1.safeParse({
        generalTickets: general_tickets,
        vipTickets: vip_tickets,
      });

      if (!result.success) {
        errors = result.error.format();
        setValidationErrors(errors); // Store validation errors
        return false;
      }
    }

    if (step === 2) {
      const result = validationSchemaStep2(numberOfParticipants).safeParse({
        campingArea: camping_area,
        tents: two_person_tents + three_person_tents,
      });

      if (!result.success) {
        errors = result.error.format();
        setValidationErrors(errors);
        return false;
      }
    }

    if (step === 3) {
      const result = validationSchemaStep3(numberOfParticipants).safeParse({
        participants, // Use the actual participants data
      });

      if (!result.success) {
        errors = result.error.format();
        setValidationErrors(errors);
        return false;
      }
    }

    if (step === 4) {
      const result = validationSchemaStep4.safeParse({
        cardNumber,
        cardName,
        expiryDate,
        cardCvc,
      });

      if (!result.success) {
        errors = result.error.format();
        setValidationErrors(errors);
        return false;
      }
    }

    // If all validations pass
    setValidationErrors(null);
    setIsButtonDisabled(false);
    return true;
  };

  const handleButtonClick = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("button is clicked");

    // Perform validation for the current step
    const isValid = await validateStep();

    setIsButtonDisabled(true); // set button to be disabled for next step

    if (isValid) {
      // Proceed to the next step or handle the form submission
      if (step === 1 || step === 3) {
        setStep(step + 1); // Move to the next step
        scrollToTop(); // scroll to the top
      } else if (step === 2) {
        await handleReservation(); // Handle reservation logic
        scrollToTop(); // then scroll to the top
      } else if (step === 4) {
        await handleSubmitPayment(); // Proceed with form submission
        scrollToTop();
      }
    } else {
      console.log("Form validation failed, please fix errors.");
    }
  };

  // UseEffect for field validation
  useEffect(() => {
    if ((step === 1 && (general_tickets > 0 || vip_tickets > 0)) || (step === 2 && camping_area && tents === participants.length) || (step === 3 && participants.length > 0) || (step === 4 && cardNumber && cardName && expiryDate && cardCvc)) {
      validateStep();
    }
  }, [general_tickets, vip_tickets, camping_area, tents, participants, cardNumber, cardName, expiryDate, cardCvc]);

  return (
    <section className="_receipt_component_ bg-white border-2 border-foreground pt-xs pb-m px-m min-w-fit w-[30vw] max-w-96 my-m sticky top-24">
      <h2 className="_receipt_title_ text-center border-b-2 border-foreground w-[50%] m-auto font-germania-one text-step-2 ">Basket</h2>

      {/* ticket information */}
      <div className="_quantity_tickets border-b-2 border-foreground border:w-[90%] py-s [&>*]:py-3xs">
        {general_tickets === 0 && vip_tickets === 0 && (
          <div className="w-full flex flex-col gap-xs items-center">
            <Image src={basketImage} width={100} alt="basket" />
            <p className="text-center">Add your tickets to the basket</p>
          </div>
        )}
        {general_tickets >= 1 && (
          <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
            <h3 className="row-start-1 font-bold">General admission</h3>

            {step === 1 ? (
              <p className="row-start-2">
                <span>{totalGeneralTicketPrice}</span> kr
              </p>
            ) : (
              <p>x {general_tickets}</p>
            )}

            {step === 1 ? (
              <div className=" row-span-full self-center flex gap-2xs">
                <button onClick={decrGeneral_tickets}>-</button>
                <span className="w-[2ch] text-center">{general_tickets}</span>
                <button onClick={incrGeneral_tickets}>+</button>
              </div>
            ) : (
              <div className="row-span-full ">
                <span>{totalGeneralTicketPrice}</span> kr
              </div>
            )}
          </div>
        )}
        {vip_tickets >= 1 && (
          <div className="_singular_quantity_ticket_ grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
            <h3 className="row-start-1 font-bold">VIP</h3>

            {step === 1 ? (
              <p className="row-start-2">
                <span>{totalVipTicketPrice}</span> kr
              </p>
            ) : (
              <p>x {vip_tickets}</p>
            )}

            {step === 1 ? (
              <div className=" row-span-full self-center flex gap-2xs">
                <button onClick={decrVIP_tickets}>-</button>
                <span className="w-[2ch] text-center">{vip_tickets}</span>
                <button onClick={incrVIP_tickets}>+</button>
              </div>
            ) : (
              <div className="row-span-full">
                <span>{totalVipTicketPrice}</span> kr
              </div>
            )}
          </div>
        )}
      </div>

      {/* camping information */}

      {step >= 2 && (camping_area || two_person_tents > 0 || three_person_tents > 0) && (
        <div className="border-b-2 border-foreground border:w-[90%] py-s [&>*]:py-3xs">
          {camping_area && (
            <div className="flex justify-between ">
              <h3 className="row-start-1 font-bold">Camping area</h3>
              <p className="row-start-2">{camping_area}</p>
            </div>
          )}

          {two_person_tents > 0 && (
            <div className="grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
              <p>Camping tent - 2 person</p>
              <p className="row-start-2">
                x <span>{two_person_tents}</span>
              </p>
              <p>{totalTwoPersonTentPrice} kr</p>
            </div>
          )}

          {three_person_tents > 0 && (
            <div className="grid grid-cols-[1fr,auto] grid-rows-[1fr,1fr]">
              <p>Camping tent - 3 person</p>
              <p className="row-start-2">
                x <span>{three_person_tents}</span>
              </p>
              <p>{totalThreePersonTentPrice} kr</p>
            </div>
          )}
        </div>
      )}

      {/* overview information */}
      {general_tickets !== 0 || vip_tickets !== 0 ? (
        <div>
          <div className="_overview_total_price_ py-s [&>*]:py-3xs">
            <h3 className="row-start-1 font-bold">Overview</h3>
            <div className="flex justify-between">
              <p>
                Tickets x <span>{general_tickets + vip_tickets}</span>
              </p>
              <p>
                <span>{totalGeneralTicketPrice + totalVipTicketPrice}</span> kr
              </p>
            </div>

            {(two_person_tents > 0 || three_person_tents > 0) && (
              <div className="flex justify-between">
                <p>
                  Camping tents x <span>{two_person_tents + three_person_tents}</span>
                </p>
                <p>
                  <span>{totalTwoPersonTentPrice + totalThreePersonTentPrice}</span> kr
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <p>Booking free</p>
              <p>{bookingFee} kr</p>
            </div>

            {green_camping && (
              <div className="flex justify-between text-green">
                <p>Green camping</p>
                <p>
                  <span>{greenCampingPrice}</span> kr
                </p>
              </div>
            )}
          </div>
          <div className="_tital_price_ flex justify-between pb-m font-bold text-step-1">
            <p>Total</p>
            <p>
              <span>{totalGeneralTicketPrice + totalVipTicketPrice + totalTwoPersonTentPrice + totalThreePersonTentPrice + bookingFee + (green_camping ? greenCampingPrice : 0)}</span> kr
            </p>
          </div>
        </div>
      ) : (
        <div className="py-s"></div>
      )}

      {/* error messages */}
      <ValidationErrors validationErrors={validationErrors} step={step} />

      {/* form button */}
      <FormReceiptCTA loading={loading} step={step} isButtonDisabled={isButtonDisabled} handleButtonClick={handleButtonClick} />
    </section>
  );
};

export default FormReceipt;

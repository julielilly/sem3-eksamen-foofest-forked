"use client";

import { useState, useEffect } from "react";
import { TicketData, useTicketStore } from "@/stores/TicketState";
import { handleReservationAction, handleSubmitPaymentAction } from "@/actions";
import { useForm } from "react-hook-form";
import FormReceipt from "@/components/tickets/FormReceipt";
import FormStepOne from "@/components/tickets/FormStepOne";
import FormConfirmation from "@/components/tickets/FormConfirmation";
import CampingAreaSelection from "@/components/tickets/CampingAreaSelection";
import Payment from "@/components/tickets/Payment";
import PersonalInformation from "@/components/tickets/PersonalInformation";
import Timer from "@/components/tickets/Timer";
import PageTitle from "@/components/common/PageTitle";

const Page = () => {
  // Retrieve ticket and step data from state
  const { general_tickets, vip_tickets, two_person_tents, three_person_tents, camping_area, green_camping, participants } = TicketData();
  const { step, reservationId, setStep, setReservationId, setTimer } = useTicketStore();

  // State hooks for managing UI and data
  const [loading, setLoading] = useState(false); // Loading state for asynchronous actions
  const [campingAreas, setCampingAreas] = useState([]); // Available camping areas
  const [validationErrors, setValidationErrors] = useState(null); // Form validation errors
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state
  const [formSubmitted, setFormSubmitted] = useState(false); // Used to stop timer

  const tents = two_person_tents + three_person_tents; // Calculate total tents

  // Initialize form state and methods
  const {
    formState: { errors }, // Error state for form fields
    register, // Register input fields with form
  } = useForm();

  // handles page changes, reload or close events
  useEffect(() => {
    // show warning before leaving, reloading or changing the page
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Show generic browser warning
    };

    const currentUrl = window.location.href;

    // Intercepting link clicks to programmatically navigate with a full page reload wich in turn triggers the "beforeunload" eventlistener
    const handleLinkClicks = (event) => {
      const anchor = event.target.closest("a");
      if (anchor && anchor.href !== currentUrl) {
        event.preventDefault();
        window.location.href = anchor.href;
      }
    };

    document.body.addEventListener("click", handleLinkClicks); // Intercept all link clicks within the app

    // if the reservation is current, check for page reloads
    if (step === 3 || step === 4) window.addEventListener("beforeunload", handleBeforeUnload); // Listen for reload/close events

    return () => {
      document.body.removeEventListener("click", handleLinkClicks);
      if (step === 3 || step === 4) {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    };
  }, [step]);

  // Handles the camping area reservation process.
  // This function is triggered during the camping area selection step.
  const handleReservation = async () => {
    setLoading(true); // Show loading state

    const result = await handleReservationAction(camping_area, tents, campingAreas);

    if (result.success) {
      console.log("reservationId", result.reservationId);

      setReservationId(result.reservationId);
      setTimer(result.timeout); // Start countdown with timeout value
      setStep(step + 1); // Move to the next step
    } else {
      setValidationErrors(result.message);
      setIsButtonDisabled(true);
    }

    setLoading(false); // Hide loading state
  };

  // Handles the payment submission process.
  // This function is triggered when the user submits the payment step.
  const handleSubmitPayment = async () => {
    setLoading(true); // Show loading state

    const result = await handleSubmitPaymentAction(reservationId, participants, setStep, general_tickets, vip_tickets, camping_area, three_person_tents, two_person_tents, green_camping);
    console.log(result.message); // Log any messages from the server

    if (result.success) {
      setStep(5); // Move to confirmation step
      setFormSubmitted(true);
      console.log("Reservation and ticket data saved successfully!");
    }

    setLoading(false); // Hide loading state
  };

  return (
    <div className="col-full">
      {/* Header Section */}
      <div className=" col-full grid-rows-1 ">
        {/* Dynamic headline based on the current step */}
        <PageTitle id="form-header">
          {step === 1 && `Tickets`}
          {step === 2 && `Choose camping`}
          {step === 3 && `Add personal information`}
          {step === 4 && `Payment`}
          {step === 5 && `Confirmation`}
          {/* Show timer only during specific steps */}
          <div className="_timer_">{(step === 3 || step === 4) && <Timer formSubmitted={formSubmitted} />}</div>
        </PageTitle>
      </div>

      {/* Main Content Section */}
      <div className="col-main flex m-auto items-center md:items-start md:justify-between gap-xs flex-col md:flex-row">
        {/* Form section */}
        <form id="reservation-form">
          {step === 1 && <FormStepOne />}

          {step !== 1 && step !== 5 && (
            <div className="border-2 border-foreground bg-white  py-m mx-auto my-m">
              {step === 2 && <CampingAreaSelection campingAreas={campingAreas} setCampingAreas={setCampingAreas} register={register} />}
              {step === 3 && <PersonalInformation validationErrors={validationErrors} register={register} />}
              {step === 4 && <Payment register={register} errors={errors} validationErrors={validationErrors} />}
            </div>
          )}

          {step === 5 && <FormConfirmation />}
        </form>

        {/* Receipt Section */}
        {step !== 5 && <FormReceipt loading={loading} tents={tents} setStep={setStep} step={step} handleReservation={handleReservation} handleSubmitPayment={handleSubmitPayment} validationErrors={validationErrors} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled} setValidationErrors={setValidationErrors} />}
      </div>
    </div>
  );
};

export default Page;

"use client";

import { useState, useEffect } from "react";
import { getAvailableSpots, reserveSpot, fullfullReservation } from "@/lib/api";
import FormReceipt from "@/components/FormReceipt";
import FormTicketFlow from "@/components/FormTicketFlow";

const Page = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({
    general_tickets: 0,
    vip_tickets: 0,
    camping_area: undefined,
    three_person_tents: 0,
    two_person_tents: 0,
    participants: [],
  });

  const [campingAreas, setCampingAreas] = useState([]);
  const [timer, setTimer] = useState(0);
  const [reservationId, setReservationId] = useState(null);

  const numberOfParticipants =
    ticketData.general_tickets + ticketData.vip_tickets;

  // Fetch available camping areas once on component mount
  useEffect(() => {
    async function fetchCampingAreas() {
      const data = await getAvailableSpots();
      setCampingAreas(data);
    }
    fetchCampingAreas();
  }, []);

  // Timer logic to countdown
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          alert("Time is up! Reservation expired.");
          setStep(1); // Reset to step 1 after expiration
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [timer]);

  // Calculate the total number of tents
  const calculateAmount = () =>
    ticketData.three_person_tents + ticketData.two_person_tents;

  // Handle reservation logic
  const handleReservation = async () => {
    if (!ticketData.camping_area || calculateAmount() === 0) {
      alert("Please select a camping area and add tents.");
      return;
    }

    const reservationData = {
      area: ticketData.camping_area,
      amount: calculateAmount(),
    };

    const selectedArea = campingAreas.find(
      (area) => area.area === ticketData.camping_area
    );

    if (selectedArea && selectedArea.available < reservationData.amount) {
      alert("Not enough spots available for your reservation.");
      return;
    }

    try {
      const response = await reserveSpot(reservationData);

      if (response.message === "Reserved") {
        setReservationId(response.id);
        setTimer(response.timeout); // Start countdown with timeout value
        setStep(step + 1); // Move to next step for participant details
      } else {
        alert(`Error reserving spot: ${response.message}`);
      }
    } catch (error) {
      alert(`Failed to reserve spot: ${error.message}`);
    }
  };

  // Handle participant details change
  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...ticketData.participants];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [field]: value,
    };
    setTicketData({ ...ticketData, participants: updatedParticipants });
  };

  // Handle payment submission
  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    if (!reservationId) {
      alert("Reservation ID is missing.");
      return;
    }

    try {
      const result = await fullfullReservation({ id: reservationId });
      setStep(5); // Move to confirmation step
      setTimer(0); // Stop the timer once payment is submitted
    } catch (error) {
      alert("Error completing reservation.");
    }
  };

  // Format time for countdown display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 600);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div className="_title_ halfround-right w-fit h-fit mt-m col-full ">
        <div className=" justify-start gap-m col-main">
          <h1 className="">
            {step === 1 && `Tickets`}
            {step === 2 && `Choose camping`}
            {step === 3 && `Add personal information`}
            {step === 4 && `Payment`}
            {step === 5 && `Confirmation`}
          </h1>

          {/* Show timer */}
          {(step === 3 || step === 4) && <div>{formatTime(timer)}</div>}
        </div>
      </div>

      <div className="flex justify-between gap-xs ">
        <FormTicketFlow
          step={step}
          setStep={setStep}
          ticketData={ticketData}
          setTicketData={setTicketData}
          campingAreas={campingAreas}
          numberOfParticipants={numberOfParticipants}
          handleReservation={handleReservation}
          handleSubmitPayment={handleSubmitPayment}
          handleParticipantChange={handleParticipantChange}
        />
        {(step === 1 || step === 2 || step === 3 || step === 4) && (
          <FormReceipt
            setStep={setStep}
            step={step}
            handleReservation={handleReservation}
            ticketData={ticketData}
            setTicketData={setTicketData}
          />
        )}
      </div>
    </div>
  );
};

export default Page;

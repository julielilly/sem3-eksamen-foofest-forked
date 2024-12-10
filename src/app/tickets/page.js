"use client";

import { useState, useEffect } from "react";
import { getAvailableSpots, reserveSpot, fullfullReservation } from "@/lib/api";
import FormReceipt from "@/components/FormReceipt";

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

  const numberOfParticipants = ticketData.general_tickets + ticketData.vip_tickets;

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
  const calculateAmount = () => ticketData.three_person_tents + ticketData.two_person_tents;

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

    const selectedArea = campingAreas.find((area) => area.area === ticketData.camping_area);

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
    updatedParticipants[index] = { ...updatedParticipants[index], [field]: value };
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
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div className="halfround-right col-full w-fit mt-m ">
        <div className="flex justify-start gap-m col-main">
          <h1>
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

      <div className="grid grid-cols-2 ">
        <div>
          {/* Step 1: Ticket selection */}
          {step === 1 && (
            <div>
              <button className="border" onClick={() => setTicketData({ ...ticketData, general_tickets: ticketData.general_tickets + 1 })}>
                Buy General Ticket
              </button>
              <button className="border" onClick={() => setTicketData({ ...ticketData, vip_tickets: ticketData.vip_tickets + 1 })}>
                Buy VIP Ticket
              </button>
              <div>
                Total Tickets: <span>{ticketData.general_tickets + ticketData.vip_tickets}</span>
              </div>
            </div>
          )}

          {/* Step 2: Camping area selection */}
          {step === 2 && (
            <div>
              {campingAreas.map((area) => (
                <button key={area.area} onClick={() => setTicketData({ ...ticketData, camping_area: area.area })}>
                  {area.area}
                  <div>Available spots: {area.available}</div>
                </button>
              ))}
              <div>Selected area: {ticketData.camping_area}</div>
              <button onClick={() => setTicketData({ ...ticketData, two_person_tents: ticketData.two_person_tents + 1 })}>Add 2-person Tent</button>
              <button onClick={() => setTicketData({ ...ticketData, three_person_tents: ticketData.three_person_tents + 1 })}>Add 3-person Tent</button>
              <div>
                <p>2-person tents: {ticketData.two_person_tents}</p>
                <p>3-person tents: {ticketData.three_person_tents}</p>
              </div>
            </div>
          )}

          {/* Step 3: Participant details */}
          {step === 3 && (
            <form
              id="details_form"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(step + 1);
                console.log(e);
              }}>
              {Array.from({ length: numberOfParticipants }, (_, index) => (
                <div key={index}>
                  <h3>{index === 0 ? "Buyer Details" : `Guest ${index} Details`}</h3>
                  <label>Name:</label>
                  <input value={ticketData.participants[index]?.name || ""} onChange={(e) => handleParticipantChange(index, "name", e.target.value)} />
                  <label>Email:</label>
                  <input type="email" value={ticketData.participants[index]?.email || ""} onChange={(e) => handleParticipantChange(index, "email", e.target.value)} />
                  <label>Phone Number:</label>
                  <input type="number" value={ticketData.participants[index]?.number || ""} onChange={(e) => handleParticipantChange(index, "number", e.target.value)} />
                </div>
              ))}
              {/* <button type="submit">Proceed to Payment</button> */}
            </form>
          )}

          {/* Step 4: Payment submission */}
          {step === 4 && <form id="payment_form" onSubmit={handleSubmitPayment}></form>}

          {/* Step 5: Order confirmation */}
          {step === 5 && <div>Order confirmed!</div>}
        </div>

        {(step === 1 || step === 2 || step === 3 || step === 4) && <FormReceipt setStep={setStep} step={step} handleReservation={handleReservation} ticketData={ticketData} setTicketData={setTicketData} />}
      </div>
    </div>
  );
};

export default Page;

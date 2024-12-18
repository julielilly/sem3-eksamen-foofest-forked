"use server";

import { addTicketData } from "@/lib/formApi";
import { reserveSpot, fullfillReservation } from "@/lib/api";

// Server Action to submit ticket data
export async function actionSubmit(participants, reservationData) {
  // Merge participants data with additional reservation details
  const completeData = participants.map((participant) => ({
    ...participant, // Spread participant details
    ticketType: reservationData.general_tickets > 0 ? "General" : "VIP", // Determine ticket type based on selection
    tentType: reservationData.two_person_tents > 0 ? "Two-Person Tent" : "Three-Person Tent", // Determine tent type based on selection
    campingArea: reservationData.camping_area, // Determine camping area based on selection
    greenCamping: reservationData.green_camping || false, // Default green camping to false if not selected
  }));

  console.log("Complete Ticket Data:", completeData);

  try {
    // Submit each participant's ticket data to the database
    const submissionResults = await Promise.all(
      completeData.map((ticket) => {
        console.log("Submitting ticket data:", ticket);
        return addTicketData(ticket);
      })
    );

    console.log("Submission Results:", submissionResults);

    return { success: true, message: "All tickets registered successfully!" }; // Return success message
  } catch (error) {
    console.error("Error submitting ticket data:", error);
    return { success: false, message: "Failed to register tickets. Please try again." }; // Return failure message
  }
}

// Handle reservation logic (to ensure enough spots are available)
export const handleReservationAction = async (camping_area, tents, campingAreas) => {
  // Prepare reservation data
  const reservationData = {
    area: camping_area,
    amount: tents,
  };

  // Find the selected camping area from the list of available areas
  const selectedArea = campingAreas.find((area) => area.area === camping_area);

  // Check if there are enough available spots in the selected area
  if (selectedArea && selectedArea.available < reservationData.amount) {
    return { success: false, message: "Not enough spots available for your reservation." };
  }

  const response = await reserveSpot(reservationData); // Attempt to reserve the spot

  if (response.message === "Reserved") {
    return { success: true, reservationId: response.id, timeout: response.timeout };
  } else {
    return { success: false, message: `Error reserving spot: ${response.message}` };
  }
};

// Handle form submission logic
export const handleSubmitPaymentAction = async (reservationId, participants, setStep, general_tickets, vip_tickets, camping_area, three_person_tents, two_person_tents, green_camping) => {
  if (!reservationId) {
    console.log("Reservation ID is missing.");
    return { success: false, message: "Reservation ID is missing." };
  }

  const reservationResult = await fullfillReservation({ id: reservationId });

  // Check if reservation is completed successfully
  if (reservationResult && reservationResult.message === "Reservation completed") {
    console.log("Reservation completed!");

    // Call the server action to submit tickets
    const response = await actionSubmit(participants, {
      general_tickets,
      vip_tickets,
      camping_area,
      three_person_tents,
      two_person_tents,
      green_camping,
    });

    if (response.success) {
      return { success: true, message: "Reservation and ticket data saved successfully!" };
    } else {
      console.log("Failed to save ticket data.");
      return { success: false, message: "Failed to save ticket data." };
    }
  } else {
    console.log("Reservation failed. Please try again.");
    return { success: false, message: "Reservation failed. Please try again." };
  }
};

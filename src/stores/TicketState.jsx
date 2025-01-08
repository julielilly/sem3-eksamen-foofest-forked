"use client";
import { create } from "zustand";

export const TicketData = create((set) => ({
  general_tickets: 0,
  vip_tickets: 0,
  camping_area: undefined,
  three_person_tents: 0,
  two_person_tents: 0,
  green_camping: false,
  participants: [],

  // Functions for ticket increment/decrement
  incrGeneral_tickets: () => {
    set((state) => {
      if (state.general_tickets < 10) {
        // Add a new participant when increasing general tickets
        const newGeneralTickets = state.general_tickets + 1;
        return {
          general_tickets: newGeneralTickets,
          participants: [
            ...state.participants,
            { name: "", email: "", number: "" }, // Add a new empty participant
          ],
        };
      }
      return state;
    });
  },
  decrGeneral_tickets: () => {
    set((state) => {
      if (state.general_tickets > 0) {
        // Remove the last participant when decreasing general tickets
        const newGeneralTickets = state.general_tickets - 1;
        const newParticipants = state.participants.filter((_, index) => index < newGeneralTickets); // Remove participants over the new general ticket count
        return {
          general_tickets: newGeneralTickets,
          participants: newParticipants,
        };
      }
      return state;
    });
  },
  incrVIP_tickets: () => {
    set((state) => {
      if (state.vip_tickets < 10) {
        // Add a new participant when increasing VIP tickets
        const newVIPTickets = state.vip_tickets + 1;
        return {
          vip_tickets: newVIPTickets,
          participants: [
            ...state.participants,
            { name: "", email: "", number: "" }, // Add a new empty participant
          ],
        };
      }
      return state;
    });
  },
  decrVIP_tickets: () => {
    set((state) => {
      if (state.vip_tickets > 0) {
        // Remove the last participant when decreasing VIP tickets
        const newVIPTickets = state.vip_tickets - 1;
        const newParticipants = state.participants.filter((_, index) => index < newVIPTickets); // Remove participants over the new VIP ticket count
        return {
          vip_tickets: newVIPTickets,
          participants: newParticipants,
        };
      }
      return state;
    });
  },

  // Functions for camping area selection
  selectCampingArea: (area) => {
    set({ camping_area: area });
  },

  // Functions for tent selection
  incrTwoPersonTents: () => {
    set((state) => ({ two_person_tents: state.two_person_tents + 1 }));
  },
  decrTwoPersonTents: () => {
    set((state) => ({
      two_person_tents: Math.max(0, state.two_person_tents - 1),
    }));
  },
  incrThreePersonTents: () => {
    set((state) => ({ three_person_tents: state.three_person_tents + 1 }));
  },
  decrThreePersonTents: () => {
    set((state) => ({
      three_person_tents: Math.max(0, state.three_person_tents - 1),
    }));
  },

  // Function to toggle green camping option
  setGreenCamping: () => {
    set((state) => ({ green_camping: !state.green_camping }));
  },

  // Function to add a new participant to the array
  addParticipant: () => {
    set((state) => ({
      participants: [
        ...state.participants,
        { name: "", email: "", number: "" }, // Always initialize as an object
      ],
    }));
  },

  // Function to update a single participant's field (index, field name, value)
  updateParticipant: (index, field, value) => {
    set((state) => {
      const updatedParticipants = [...state.participants];
      // Check if the participant exists and is an object
      if (updatedParticipants[index] && typeof updatedParticipants[index] === "object") {
        updatedParticipants[index][field] = value;
      } else {
        console.error(`Participant at index ${index} is not an object or does not exist.`);
      }
      return { participants: updatedParticipants };
    });
  },
}));

export const useTicketStore = create((set) => ({
  step: 1,
  reservationId: null,
  timer: 0,
  setStep: (step) => set({ step }),
  setReservationId: (id) => set({ reservationId: id }),
  setTimer: (newTime) =>
    set((state) => {
      // Prevent setting an invalid timer value
      if (newTime >= 0) {
        return { timer: newTime };
      }
      return state; // If newTime is invalid (e.g., negative), keep the current state
    }),
  updateTimer: (newTime) =>
    set((state) => {
      // Prevent setting an invalid timer value
      if (newTime >= 0) {
        return { timer: newTime - 1000 };
      }
      return state; // If newTime is invalid (e.g., negative), keep the current state
    }),
}));

import { create } from "zustand";
// import { persist } from "zustand/middleware";

export const TicketData = create((set) => ({
  general_tickets: 0,
  vip_tickets: 0,
  camping_area: undefined,
  three_person_tents: 0,
  two_person_tents: 0,
  participants: [],
  incrGeneral_tickets: () => {
    set((state) => ({ general_tickets: state.general_tickets + 1 }));
  },
  decrGeneral_tickets: () => {
    set((state) => ({ general_tickets: state.general_tickets - 1 }));
  },
  incrVIP_tickets: () => {
    set((state) => ({ vip_tickets: state.vip_tickets + 1 }));
  },
  decrVIP_tickets: () => {
    set((state) => ({ vip_tickets: state.vip_tickets - 1 }));
  },
}));

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const TicketState = create(
//   persist((set) => {
//     return {};
//   })
// );

// export default TicketState;

// Fra introduktion
// import { create } from "zustand";

// import { persist } from "zustand/middleware";

// const useCounter = create(
//   persist(
//     (set) => {
//       return {
//         counter: 0,
//         incrCounter: () => {
//           set((state) => ({ counter: state.counter + 1 }));
//         },
//         decrCounter: () => {
//           set((state) => ({ counter: state.counter - 1 }));
//         },
//       };
//     },
//     {
//       name: "count-storage", // name of the item in the storage (must be unique)
//     }
//   )
// );

// export default useCounter;

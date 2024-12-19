import { create } from "zustand";

export const FilterPerDay = create((set) => ({
  selectedDay: "", // state to track the selected day (starts with an empty string)
  setSelectedDay: (day) => set({ selectedDay: day }), // function  that updates to set the selected day

  initToday: () => {
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const todayIndex = new Date().getDay(); // get today's index (0 = Sunday, 6 = Saturday)

    // ChatGPT gave me the function for adjustedIndex, as I couldn't figure out how to change the order of the days.
    const adjustedIndex = (todayIndex + 6) % 7; // adjust index so Monday = 0

    set({ selectedDay: daysOfWeek[adjustedIndex] }); // set the selected day
  },
}));

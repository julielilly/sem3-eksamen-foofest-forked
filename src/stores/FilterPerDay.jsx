import { create } from "zustand";

export const FilterPerDay = create((set) => ({
  selectedDay: "", // state to track the selected day
  selectedDay: (day) => set({ selectedDay: day }), // this sets the selected day
  initToday: () => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const todayIndex = new Date().getDay(); // Get today's index (0 = Sunday, 6 = Saturday)
    const adjustedIndex = (todayIndex + 6) % 7; // Adjust index so Monday = 0
    set({ selectedDay: daysOfWeek[adjustedIndex] }); // Set the selected day
  },
}));

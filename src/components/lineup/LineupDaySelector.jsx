import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import { FilterPerDay } from "@/stores/FilterPerDay";
import { useEffect } from "react";

const LineupDaySelector = () => {
  const { selectedDay, setSelectedDay, initToday } = FilterPerDay();

  useEffect(() => {
    initToday(); // initializes the selected day based on the current day of the week
  }, []); // runs only once when the component mounts

  return (
    <div className="col-main flex flex-wrap items-center gap-3">
      {[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ].map((day) => (
        <ButtonSharpEdge
          key={day}
          theme={day === selectedDay ? "white" : "black"}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </ButtonSharpEdge>
      ))}
    </div>
  );
};

export default LineupDaySelector;

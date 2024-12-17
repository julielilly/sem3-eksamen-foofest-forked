"use client";

import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import { FilterPerDay } from "@/stores/FilterPerDay";
import { useEffect } from "react";

const LineupDaySelector = ({ onDaySelect }) => {
  const { selectedDay, setSelectedDay, initToday } = FilterPerDay();

  useEffect(() => {
    initToday(); // initialize today's day on page load
  }, []);

  // short days are needed for matching the days from schedule, full are the days to be displayed.
  const daysMap = [
    { short: "mon", full: "Monday" },
    { short: "tue", full: "Tuesday" },
    { short: "wed", full: "Wednesday" },
    { short: "thu", full: "Thursday" },
    { short: "fri", full: "Friday" },
    { short: "sat", full: "Saturday" },
    { short: "sun", full: "Sunday" },
  ];

  return (
    <div className="col-main flex flex-wrap items-center gap-3">
      {daysMap.map(({ short, full }) => (
        <ButtonSharpEdge
          key={short}
          theme={short === selectedDay ? "white" : "black"}
          onClick={() => {
            console.log("Setting day to:", short);
            setSelectedDay(short);
          }}
        >
          {full}
        </ButtonSharpEdge>
      ))}
    </div>
  );
};

export default LineupDaySelector;

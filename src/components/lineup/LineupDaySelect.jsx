"use client";

import { FilterPerDay } from "@/stores/FilterPerDay";
import { useEffect } from "react";

const LineupDaySelector = ({ theme = "black" }) => {
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

  const themeClasses = {
    white:
      "bg-white border-2 border-black shadow-[6px_5px_0px_1px_var(--foreground)] hover:bg-darkblue hover:text-white hover:border-white hover:shadow-[6px_5px_0px_1px_background]",
    black:
      "bg-foreground text-white border-2 border-white shadow-[6px_5px_0px_1px_background] hover:bg-white hover:text-foreground hover:border-foreground hover:shadow-[6px_5px_0px_1px_var(--foreground)]",
    filterDef:
      "text-white border-b hover:outline-2 hover:outline hover:italic transition-all py-1.5 px-2",
    filterAct:
      "text-white hover:bg-lightbluehover outline-2 outline py-1.5 px-2 transition-all",
  };

  const getThemeClass = (short) =>
    short === selectedDay ? themeClasses.white : themeClasses[theme]; // sets the default colour of the selected day button
  const getSeeAllBandsTheme = () =>
    selectedDay ? themeClasses.filterDef : themeClasses.filterAct; // apply different styles for the "See all bands" button

  return (
    <div className=" grid gap-m">
      <div className="_days_schedule_area_ flex flex-wrap items-center gap-3">
        {daysMap.map(({ short, full }) => (
          <div
            className={`sharp transition-all m-2 text-center basis-[100px] flex-auto h-fit max-h-[50px] first-letter:capitalize ${getThemeClass(
              short
            )}`}
            key={short}
            theme={getThemeClass(short)}
            onClick={() => {
              setSelectedDay(short);
            }}
          >
            {full}
          </div>
        ))}
      </div>
      <div className="place-self-center">
        <p
          className={` cursor-pointer text-normal ${getSeeAllBandsTheme()}`}
          onClick={() => setSelectedDay("")}
          // clear selectedDay from the one day-selection to show all bands to an empty string
        >
          See all bands
        </p>
      </div>
    </div>
  );
};

export default LineupDaySelector;

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

  // className="transition-all hover:z-10 hover:translate-y-[-10px] hover:translate-x-[-10px] hover:shadow-[15px_15px_0px_-5px_var(--foreground)]"

  const themeClasses = {
    white:
      "bg-white border-2 border-black cursor-default translate-y-[6px] translate-x-[6px] ",
    black:
      "bg-foreground text-white border-2 border-white shadow-[6px_5px_0px_1px_background] hover:bg-white hover:text-foreground hover:border-foreground hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] transition-all",
    filterDef:
      "text-white outline-2 outline hover:italic py-1.5 px-10 transition-all shadow-[6px_5px_0px_1px_background] hover:shadow-none translate-y-[-6px] hover:translate-y-[6px] translate-x-[-6px] hover:translate-x-[6px]",
    filterAct:
      "text-white outline-2 outline py-1.5 px-10 translate-y-[6px] translate-x-[6px]",
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

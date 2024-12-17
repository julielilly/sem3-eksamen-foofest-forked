"use client";

import { useBands } from "@/lib/hooks/useBands";
import { useSchedule } from "@/lib/hooks/useSchedule";
import { FilterPerDay } from "@/stores/FilterPerDay";
import LineUpCardCTA from "@/components/lineup/LineUpCardCTA";

const LineupProgramComponent = () => {
  const { selectedDay, setSelectedDay, initToday } = FilterPerDay();

  const {
    data: bands,
    isLoading: bandsLoading,
    isError: bandsError,
  } = useBands();
  const {
    data: schedule,
    isLoading: scheduleLoading,
    isError: scheduleError,
  } = useSchedule(selectedDay);

  if (bandsLoading || scheduleLoading) return <div>Loading...</div>;
  if (bandsError || scheduleError) return <div>Sorry, an error occurred</div>;

  // this will flatten the entire schedule data into an accessible array
  // i needed to add a way to check if the schedule is valid, which is by checking with the "?", and if it's not valid, it will just return an empty array in the end.
  const performances = schedule
    ? Object.entries(schedule).flatMap(([scene, days]) =>
        Object.entries(days).flatMap(([day, shifts]) =>
          shifts.map((shift) => ({
            scene,
            day,
            start: shift.start,
            end: shift.end,
            act: shift.act,
          }))
        )
      )
    : [];

  // filter performances based on the selected day
  const filteredPerformances = performances.filter(
    (performance) => performance.day === selectedDay
  );

  // trying to match performance with the correct band
  const matchedPerformances = filteredPerformances
    .map((performance) => {
      const band = bands.find((band) => band.name === performance.act);
      return band
        ? // if band is found, it will be created into an object that combines the band with the performance.
          {
            ...performance,
            band,
          }
        : null;
    })
    .filter(Boolean); // remove null results

  return (
    <ul className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-content-center md:gap-4 gap-10">
      {matchedPerformances.map((performance) => (
        <LineUpCardCTA
          key={performance.act}
          id={performance.act}
          artistName={performance.band.name}
          dayOfPlaying={performance.day}
          scene={performance.scene}
          src={performance.band.logo}
          slug={performance.band.slug}
        />
      ))}
    </ul>
  );
};

export default LineupProgramComponent;

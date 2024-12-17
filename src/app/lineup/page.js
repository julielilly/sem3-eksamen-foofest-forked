import LineUpCardCTA from "@/components/lineup/LineUpCardCTA";

import { useBands } from "@/lib/hooks/useBands";
import { useSchedule } from "@/lib/hooks/useSchedule";
import LineupDaySelector from "@/components/lineup/LineupDaySelector";
import { FilterPerDay } from "@/stores/FilterPerDay";

function Page() {
  const { data: bands, isLoading, isError } = useBands();
  const { data: schedule, scheduleIsLoading, scheduleIsError } = useSchedule();
  const { selectedDay } = FilterPerDay(); // extract selected day from Zustand store

  console.log(selectedDay);
  if (isLoading || scheduleIsLoading) return <div>Loading...</div>;
  if (isError || scheduleIsError) return <div>Sorry, an error occurred</div>;

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
  const matchPerformances = filteredPerformances
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
    .filter(Boolean); // remove falsy values, basically all values that are null, from the array, which assures only valid object are in the array.

  return (
    <div className="overflow-hidden relative">
      <h1 className="halfround-right text-title my-10 md:w-1/2">Lineup</h1>

      {/* Day buttons layout  */}
      <section className="col-full  relative bg-[--blue-light] min-h-[200px] py-10 my-10">
        <div className="col-main row-start-1 flex flex-wrap items-center gap-3">
          <LineupDaySelector />
        </div>
      </section>

      {/* The filtered lineup */}
      <ul className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  place-content-center md:gap-4 gap-10 ">
        {matchPerformances.map((performance) => (
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
    </div>
  );
}

export default Page;

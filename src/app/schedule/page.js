"use client";

// Definitely relevant to use React Query to this, as it constantly updates

import { useSchedule } from "@/lib/hooks/useSchedule";

export default function page() {
  const { data: schedule, isLoading, isError } = useSchedule();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry, an error occurred</div>;

  console.log(schedule);

  return (
    <div className="py-20">
      <h1>Testing Fetching schedule</h1>

      <div className="py-3">
        <h2>Jotunheim Schedule</h2>
        <ul>
          {schedule.Jotunheim &&
            Object.entries(schedule.Jotunheim).map(([day, shifts], index) => (
              <li key={index}>
                <p>{day}:</p>
                <ul>
                  {shifts.map((shift, shiftIndex) => (
                    <li key={shiftIndex}>
                      {shift.start} - {shift.end}: {shift.act}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>

      <div className="py-3">
        <h2>Midgard Schedule</h2>
        <ul>
          {schedule.Midgard &&
            Object.entries(schedule.Midgard).map(([day, shifts], index) => (
              <li key={index}>
                <p>{day}:</p>
                <ul>
                  {shifts.map((shift, shiftIndex) => (
                    <li key={shiftIndex}>
                      {shift.start} - {shift.end}: {shift.act}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>

      <div className="py-3">
        <h2>Vanaheim Schedule</h2>
        <ul>
          {schedule.Vanaheim &&
            Object.entries(schedule.Vanaheim).map(([day, shifts], index) => (
              <li key={index}>
                <p>{day}:</p>
                <ul>
                  {shifts.map((shift, shiftIndex) => (
                    <li key={shiftIndex}>
                      {shift.start} - {shift.end}: {shift.act}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

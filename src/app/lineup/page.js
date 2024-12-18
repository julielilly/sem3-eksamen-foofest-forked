import { getBands } from "@/lib/api";
import { getSchedule } from "@/lib/schedule";
import LineupDaySelector from "@/components/lineup/LineupDaySelect";
import LineupProgramComponent from "@/components/lineup/LineupProgramComponent";

export default async function Page() {
  const bands = await getBands();
  const schedule = await getSchedule();

  return (
    <div className="overflow-hidden relative">
      <h1 className="halfround-right text-title my-10 md:w-1/2">Lineup</h1>
      <section className="col-full relative bg-[--blue-light] min-h-[200px] py-10 my-10">
        <div className="col-main self-center ">
          <LineupDaySelector />
        </div>
      </section>

      <LineupProgramComponent bands={bands} schedule={schedule} />
    </div>
  );
}

import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { getSchedule } from "@/lib/schedule";
import { getSingleBand } from "@/lib/api";

import Image from "next/image";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import waveImage from "../../assets/wave.svg";
import Link from "next/link";
import LoadingScreen from "@/components/common/LodingScreen";

import LineUpHeader from "@/components/lineup/LineUpHeader";
import PageTitle from "@/components/common/PageTitle";
import { useBands } from "@/lib/hooks/useBands";
import { useSchedule } from "@/lib/hooks/useSchedule";
import { FilterPerDay } from "@/stores/FilterPerDay";

const page = async ({ params }) => {
  const { slug } = params;

  const band = await getSingleBand(slug);
  const schedules = await getSchedule();

  if (!band) return <div>Sorry, an error occurred</div>;

  const { selectedDay, setSelectedDay, initToday } = FilterPerDay();

  const {
    data: schedule,
    isLoading: scheduleLoading,
    isError: scheduleError,
  } = useSchedule(selectedDay);

  if (scheduleLoading) return <LoadingScreen></LoadingScreen>;
  if (scheduleError) return <div>Sorry, an error occurred</div>;

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

  const filteredPerformances = performances.filter(
    (performance) =>
      performance.day === selectedDay && performance.act === band.name
  );

  console.log(band);

  return (
    <div className="col-full">
      <section className="relative w-[100%] overflow-hidden col-full">
        <Link
          href={"/lineup"}
          className=" grid place-content-center bg-background border-2 border-foreground rounded-full w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-all absolute top-1/2 transform -translate-y-1/2 left-5  "
        >
          <FaArrowLeft />
        </Link>

        <h2 className="absolute top-20 font-bold text-title  bg-background text-foreground  py-1xs pr-s pl-l rounded-r-full border-l-0  border-2 border-foreground text-nowrap">
          {band.genre}
        </h2>

        <Image
          src={
            band.logo.startsWith("https:")
              ? band.logo
              : `http://localhost:8080/logos/${band.logo}`
          }
          alt={`image of ${band.name}`}
          height={300}
          width={500}
          className="w-[100%]  object-cover object-center row-start-1 col-full h-[90svh] min-h-[500px]"
        ></Image>

        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 md:left-[-600px] left-[-50%]  transform transition animate-[wave_10s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[0px] transition-all animate-[wave_10s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 md:left-[600px] left-[50%] transition-all animate-[wave_10s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[1200px]  transition-all animate-[wave_10s_infinite]"
        ></Image>
      </section>

      <div className="col-full">
        <PageTitle> {band.name}</PageTitle>
      </div>

      <section className="mx-[0px] lg:mx-[200px] col-main [&>*]:my-8 mb-[100px]">
        <section className="flex flex-wrap gap-4">
          <LineUpHeader
            edge={"right"}
            title={"Scene"}
            header={performance.scene}
          ></LineUpHeader>

          <LineUpHeader
            edge={"left"}
            title={"Day of playing"}
            header={performance.day}
          >
            <CiCalendar className="text-title" />
          </LineUpHeader>
        </section>

        <span className="text-[--blue-light]">
          {band.logoCredits ? `PICTURE BY: ${band.logoCredits}` : " "}
        </span>

        <div className="max-w-[65ch]">
          <p className="text-text font-bold flex gap-2">
            {band.name} is a band with the memebers:
          </p>
          {band.members.map((memeber, i) => (
            <p
              key={i}
              className="after:content-[','] last:after:content-['.'] "
            >
              {memeber}
            </p>
          ))}
        </div>

        <p>{band.bio}</p>

        <div className="mx-[auto] w-fit">
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/tickets`}>Buy tickets now!</Link>
          </ButtonSharpEdge>
        </div>
      </section>
    </div>
  );
};

export default page;

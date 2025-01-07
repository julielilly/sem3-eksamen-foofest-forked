"use client";

import { useEffect } from "react"; // imported useEffect to use with scroll to top of page
import { useBands } from "@/lib/hooks/useBands";
import { useSchedule } from "@/lib/hooks/useSchedule";
import LoadingScreen from "@/components/common/LodingScreen";

import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import waveImage from "../../assets/wave.svg";
import Link from "next/link";

import { getSingleBand } from "@/lib/api";
import LineUpHeader from "@/components/lineup/LineUpHeader";
import PageTitle from "@/components/common/PageTitle";

import { use } from "react";

const page = ({ params }) => {
  useEffect(() => {
    // used to scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  //get the slug from the component new use from react
  const { slug } = use(params);

  const {
    data: bands,
    isLoading: bandsLoading,
    isError: bandsError,
  } = useBands();

  const {
    data: schedule,
    isLoading: scheduleLoading,
    isError: scheduleError,
  } = useSchedule();

  if (bandsLoading || scheduleLoading) return <LoadingScreen></LoadingScreen>;
  if (bandsError || scheduleError)
    return <div>Sorry, an error has occurred</div>;

  //tjekker om band name er det samme som slug
  const band = bands.find((band) => band.slug == slug);
  if (!band) {
    return <div>sorry, no band</div>;
  }

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

  // filter performances based on band name
  const bandPerformances = performances.filter(
    (performance) => performance.act === band.name
  );

  // const band = await getSingleBand(slug);

  console.log(band);

  return (
    <div className="col-full">
      <section className="relative w-[100%] overflow-hidden col-full">
        <button
          onClick={() => {
            history.back();
          }}
          className=" grid place-content-center bg-background border-2 border-foreground rounded-full w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-all absolute top-1/2 transform -translate-y-1/2 left-5  "
        >
          <FaArrowLeft />
        </button>

        <h2 className="absolute top-20 font-bold text-title  bg-background text-foreground  py-1xs pr-s pl-l rounded-r-full border-l-0  border-2 border-foreground text-nowrap">
          {band.name}
        </h2>

        <Image
          src={
            band.logo.startsWith("https:")
              ? band.logo
              : `http://localhost:8080/logos/${band.logo}`
          }
          alt={`image of ${band.name}`}
          height={500}
          width={500}
          className="w-[100%]  object-cover object-top row-start-1 col-full h-[70svh] min-h-[400px]"
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

      <section className="mx-[0px] lg:mx-[200px] col-main [&>*]:my-8 mb-[100px]">
        {bandPerformances.length > 0 ? (
          <section>
            {bandPerformances.map((performance, index) => (
              <div key={index} className="md:flex grid flex-wrap gap-4">
                <LineUpHeader
                  edge={"right"}
                  title={"Scene"}
                  header={performance.scene}
                ></LineUpHeader>

                <LineUpHeader
                  edge={"left"}
                  title={"Day of playing"}
                  header={
                    performance.day == "mon"
                      ? "Monday"
                      : performance.day == "tue"
                      ? "Tuesday"
                      : performance.day == "wed"
                      ? "Wednesday"
                      : performance.day == "thu"
                      ? "Thursday"
                      : performance.day == "fri"
                      ? "Friday"
                      : performance.day == "sat"
                      ? "Saturday"
                      : performance.day == "sun"
                      ? "Sunday"
                      : performance.day
                  }
                >
                  <CiCalendar className="text-title" />
                </LineUpHeader>
              </div>
            ))}
            <LineUpHeader
              edge={"right"}
              header={`genre: ${band.genre}`}
            ></LineUpHeader>
          </section>
        ) : (
          <LineUpHeader
            edge={"right"}
            title={"Day of playing"}
            header={"No preformance for this band"}
          >
            <CiCalendar className="text-title" />
          </LineUpHeader>
        )}

        <span className="text-[--blue-light]">
          {band.logoCredits ? `PICTURE BY: ${band.logoCredits}` : " "}
        </span>

        <div className="max-w-[65ch]">
          <p className="text-text font-bold flex gap-2">
            {band.name} is a band with the members:
          </p>
          {band.members.map((member, i) => (
            <p
              key={i}
              className="after:content-[','] last:after:content-['.'] "
            >
              {member}
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

import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";
import waveImage from "../../assets/wave.svg";
import Link from "next/link";

import { getSingleBand } from "@/lib/api";
import LineUpHeader from "@/components/LineUpHeader";

const page = async ({ params }) => {
  const { slug } = params;

  const band = await getSingleBand(slug);

  console.log(band);

  return (
    <div>
      <section className="relative w-[100%] overflow-hidden col-full">
        <Link
          href={"/line_up"}
          className="grid place-content-center bg-background border-2 border-foreground rounded-full w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-all absolute top-1/2 transform -translate-y-1/2 left-5  "
        >
          <FaArrowLeft />
        </Link>

        <h2 className="absolute top-20 font-bold text-title  bg-background text-foreground  py-1xs pr-s pl-l rounded-r-full border-l-0  border-2 border-foreground text-nowrap">
          {band.genre}
        </h2>

        <Image
          src={band.logo.startsWith("https:") ? band.logo : `/${band.logo}`}
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
          className="absolute bottom-0 left-[-600px]  transform transition animate-[wave_10s_infinite]"
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
          className="absolute bottom-0 left-[600px] transition-all animate-[wave_10s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[1200px]  transition-all animate-[wave_10s_infinite]"
        ></Image>
      </section>

      <section className="mx-[0px] lg:mx-[200px]  [&>*]:my-8 mb-[100px]">
        <h1 className="halfround-right font-bold text-title capitalize my-10">
          {band.name}
        </h1>

        <section className="flex flex-wrap gap-4">
          <LineUpHeader
            edge={"right"}
            title={"Scene"}
            header={"midgard"}
          ></LineUpHeader>

          <LineUpHeader
            edge={"left"}
            title={"Day of playing"}
            header={"Wednesday"}
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

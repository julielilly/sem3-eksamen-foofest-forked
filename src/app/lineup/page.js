import LineUpCardCTA from "@/components/lineup/LineUpCardCTA";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import Image from "next/image";
import BoatImg from "../assets/boat.svg";
import ForsideLineUp from "@/components/ForsideLineUp";
import Link from "next/link";

import { getBands } from "@/lib/api";

async function page() {
  const bands = await getBands();

  console.log(bands[22]);

  return (
    <div className="overflow-hidden relative">
      <h1 className="halfround-right text-title my-10 md:w-1/2"> Line up</h1>

      <section className="col-full  relative bg-[--blue-light] min-h-[200px] py-10 my-10">
        <div className="col-main row-start-1 flex flex-wrap items-center gap-3">
          <ButtonSharpEdge theme={"black"}>
            <Link className="flex-[200px]  " href={`/`}>
              Monday
            </Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>tuesday</Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>wednesday</Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>thursday</Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>friday</Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>saturday</Link>
          </ButtonSharpEdge>
          <ButtonSharpEdge theme={"black"}>
            <Link href={`/`}>sunday</Link>
          </ButtonSharpEdge>
        </div>
      </section>

      <ul className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  place-content-center md:gap-4 gap-10 ">
        {bands.map((band, i) => (
          <LineUpCardCTA
            id={i}
            artistName={band.name}
            dayOfPlaying={"wednesday"}
            scene={"midgard"}
            src={band.logo}
            slug={band.slug}
          ></LineUpCardCTA>
        ))}
      </ul>
    </div>
  );
}

export default page;

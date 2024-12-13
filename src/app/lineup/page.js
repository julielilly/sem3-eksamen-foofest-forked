import LineUpCardCTA from "@/components/lineup/LineUpCardCTA";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import Image from "next/image";
import BoatImg from "../assets/boat.svg";
import ForsideLineUp from "@/components/ForsideLineUp";

import { getBands } from "@/lib/api";

async function page() {
  const bands = await getBands();

  console.log(bands[22]);

  return (
    <div className="overflow-hidden relative">
      <h1 className="halfround-right text-title my-10 md:w-1/2"> Line up</h1>

      <section className="md:flex md:justify-around grid grid-cols-2 last:col-span-2 place-items-center gap-5 bg-[--blue-light] py-10 my-10 px-5">
        <ButtonSharpEdge theme={"black"}>Monday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>Tuesday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>wednesday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>Thursday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>Friday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>Sunday</ButtonSharpEdge>
        <ButtonSharpEdge theme={"black"}>Saturday</ButtonSharpEdge>
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

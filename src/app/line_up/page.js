import LineUpCardCTA from "@/components/LineUpCardCTA";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";

import { getSubs } from "@/lib/api";

async function page() {
  // const lineUp = await getSubs();

  // console.log(lineUp);

  return (
    <div>
      <h1 className="halfround-right text-title my-10"> Line up</h1>

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
        <LineUpCardCTA
          artistName={"artist WOO"}
          dayOfPlaying={"wednesday"}
          scene={"midgard"}
          scr={""}
          id={1}
        ></LineUpCardCTA>
      </ul>
    </div>
  );
}

export default page;

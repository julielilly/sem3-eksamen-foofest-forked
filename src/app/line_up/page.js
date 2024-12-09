import LineUpCardCTA from "@/components/LineUpCardCTA";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";

const page = () => {
  return (
    <div>
      <h1 className="halfround-right text-title my-10"> Line up</h1>

      <section className="md:flex md:justify-around grid grid-cols-2 last:col-span-2 place-items-center gap-5 bg-[--blue-light] py-10 my-10 px-5">
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
        <ButtonSharpEdge></ButtonSharpEdge>
      </section>

      <ul className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  place-content-center md:gap-4 gap-10 ">
        <LineUpCardCTA
          artistName={"artist WOO"}
          dayOfPlaying={"wednesday"}
          scene={"midgard"}
          scr={""}
          id={1}
        ></LineUpCardCTA>

        <LineUpCardCTA
          artistName={"artist WOO"}
          dayOfPlaying={"wednesday"}
          scene={"midgard"}
          scr={""}
          id={1}
        ></LineUpCardCTA>
        <LineUpCardCTA
          artistName={"artist WOO"}
          dayOfPlaying={"wednesday"}
          scene={"midgard"}
          scr={""}
          id={1}
        ></LineUpCardCTA>
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
};

export default page;

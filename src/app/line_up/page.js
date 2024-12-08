import LineUpCardCTA from "@/components/LineUpCardCTA";
const page = () => {
  return (
    <div>
      <h1 className="halfround-right text-title"> Line up</h1>{" "}
      <ul>
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

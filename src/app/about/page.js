import AccordienWrapper from "@/components/common/AccordienWrapper";
import PageTitle from "@/components/common/PageTitle";

const Page = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <div className="mx-auto md:w-[60%] my-5">
        <p>
          Welcome to Foo Fest, where the realms of myth and music collide! Set
          in the enchanting town of Norhaven, Foo Fest is an unforgettable
          seven-day celebration of sound, culture, and community. Taking place
          from June 10-16, 2024, the festival blends the grandeur of Norse
          mythology with an eclectic lineup of artists across multiple genres.
          <br></br>
          <br></br>
          Explore three dynamic stages — Midgard, Vanaheim, and Jotunheim — each
          offering a unique musical experience ranging from powerful headliners
          to indie gems and heavy beats. Whether you're here for the music, the
          myth, or the magic, Foo Fest is your gateway to adventure. Camping at
          Foo Fest is more than just pitching a tent; it's an experience!
          <br></br>
          <br></br>
          Choose from five distinct camping areas — each inspired by legendary
          Norse realms, offering varying atmospheres for all kinds of
          festival-goers. Join us for a journey through myth and melody, and
          make memories that will echo through the ages! Join Us at Foo Fest
          2024 Get ready to embark on an epic journey through sound and myth.
          Gather your crew, prepare your gear, and let’s make Foo Fest 2024 in
          Norhaven a legend of its own!
        </p>
      </div>

      {/* footer linker til id, så det skal altid være der */}
      <div id="faq">
        <h2 className=" font-bold halfround-right md:w-1/3 ">FAQ</h2>
        <AccordienWrapper></AccordienWrapper>
      </div>
    </div>
  );
};

export default Page;

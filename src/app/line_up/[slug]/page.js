import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";
import waveImage from "../../assets/wave.svg";

import { getSingleBand } from "@/lib/api";

const page = async ({ params }) => {
  const { slug } = params;
  const band = await getSingleBand(slug);

  console.log(band);

  return (
    <div>
      <h1></h1>
      <section className="relative w-[100%] overflow-hidden ">
        <Image
          src={""}
          alt={"image of something"}
          height={300}
          width={200}
          className="w-[100%] h-[500px] object-cover object-top"
        ></Image>

        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[-600px] "
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[0px] "
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[600px] "
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={600}
          className="absolute bottom-0 left-[1200px] "
        ></Image>
      </section>

      <section className="mx-[0px] lg:mx-[200px]  [&>*]:my-8 mb-[100px]">
        <h1 className="halfround-right font-bold text-title capitalize my-10">
          hello
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="font-bold text-text  bg-background text-foreground  py-1xs pr-s pl-l rounded-r-full  border-2 border-foreground text-nowrap">
            <p>Scene</p>
            <h2>Midgard</h2>
          </div>
          <div className="flex justify-between items-center bg-background text-foreground  py-1xs pr-s pl-l rounded-l-full  border-2 border-foreground text-nowrap">
            <div className="font-bold text-text">
              <p>Scene</p>
              <h2>Midgard</h2>
            </div>
            <CiCalendar className="text-title" />
          </div>
        </section>
        <span>PICTURE BY "some name"</span>
        <p className="text-text font-bold">
          artist WOOO består af medlemerne [members] . . .
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor 
        </p>
        <div className="mx-[auto] w-fit">
          <ButtonSharpEdge theme={"black"}>Buy Tickets</ButtonSharpEdge>
        </div>
      </section>
    </div>
  );
};

export default page;

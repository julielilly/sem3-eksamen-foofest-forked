import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import Image from "next/image";
import HeroImage from "@/app/assets/hero_image.png";
import Border from "@/app/assets/border.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="col-full relative">
      <Image
        src={HeroImage}
        alt="festival crowd"
        className="row-start-1 col-full h-[100svh] min-h-[500px] object-cover"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="col-main row-start-1 text-white self-center h-fit justify-items-center grid">
        <h1 className="text-big-title mb-s font-germania-one text-center">
          Ticket sale is open
        </h1>
        <Link href={"/tickets"} className="place-self-center">
          <ButtonSharpEdge theme="black">Get your tickets now</ButtonSharpEdge>
        </Link>
      </div>

      <Image
        src={Border}
        alt="line border"
        width={1600}
        height={100}
        className="absolute bottom-[-45px] w-full h-[90px] object-cover object-center mix-blend-difference"
      />
    </div>
  );
};

export default Hero;

// normal: "var(--text)",
// "step-1": "var(--step-1)",
// "step-2": "var(--step-2)",
// "step-3": "var(--step-3)",
// title: "var(--title)",
// "big-title": "var(--big-title)",

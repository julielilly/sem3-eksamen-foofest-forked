import Hero from "@/components/common/Hero";
import ForsideLineUp from "@/components/ForsideLineUp";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <div className="relative flex flex-col gap-[50px] items-center justify-between pt-[250px]">
        <h1 className="text-title halfround-right w-1/2 ">Line Up</h1>

        <ForsideLineUp></ForsideLineUp>
        <ButtonSharpEdge theme={"black"}>
          <Link href={`/line_up`}>See the whole line up</Link>
        </ButtonSharpEdge>
      </div>
    </div>
  );
}

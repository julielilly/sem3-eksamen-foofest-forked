import Hero from "@/components/common/Hero";
import ForsideLineUp from "@/components/ForsideLineUp";
import ButtonSharpEdge from "@/components/common/ButtonSharpEdge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage grid place-items-center gap-xl">
      <Hero />
      <div className="relative  grid place-items-center gap-m ">
        <h1 className="text-title text-center halfround-right md:w-1/2 w-[100%] ">
          Lineup
        </h1>

        <ForsideLineUp />

        <ButtonSharpEdge theme={"white"}>
          <Link href={`/lineup`}>See the whole lineup</Link>
        </ButtonSharpEdge>
      </div>
    </div>
  );
}

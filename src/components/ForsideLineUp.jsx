import { getBands } from "@/lib/api";
import { GoDotFill } from "react-icons/go";
import ButtonSharpEdge from "./common/ButtonSharpEdge";
import Link from "next/link";

async function ForsideLineUp() {
  const bands = await getBands();

  console.log(bands[22]);
  return (
    <ul className="flex  flex-wrap gap-3 justify-center w">
      {bands.slice(0, 50).map((band, i) => (
        <li key={band.slug || i} className="flex items-center gap-2 ">
          <Link
            href={`/lineup/${band.slug}`}
            className={
              i <= 15
                ? ` text-step-3 px-2 font-bold text-[--blue-light] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : i <= 25
                ? `text-step-2 px-2 font-bold text-[--green] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : i <= 40
                ? `text-step-1 px-2 font-bold text-[--yellow] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : ` text-text px-2 font-bold text-[--red] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
            }
            key={i}
          >
            {band.name}
          </Link>
          <GoDotFill className="fill-red " />
        </li>
      ))}
    </ul>
  );
}

export default ForsideLineUp;

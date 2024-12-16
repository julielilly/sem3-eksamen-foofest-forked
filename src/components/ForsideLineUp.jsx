import { getBands } from "@/lib/api";
import { GoDotFill } from "react-icons/go";
import ButtonSharpEdge from "./common/ButtonSharpEdge";
import Link from "next/link";

async function ForsideLineUp() {
  const bands = await getBands();

  console.log(bands[22]);
  return (
    <ul className="flex  flex-wrap gap-3 justify-center w">
      {bands.slice(0, 40).map((band, i) => (
        <li key={band.slug || i} className="flex items-center md:gap-2 ">
          <Link
            href={`/lineup/${band.slug}`}
            className={
              i <= 15
                ? ` md:text-step-3 text-step-2 basis-auto flex-shrink md:px-2 font-bold text-[--blue-light] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : i <= 20
                ? `md:text-step-2 text-step-1 basis-auto flex-shrink md:px-2 font-bold text-[--green] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : i <= 30
                ? `md:text-step-1 text-text basis-auto flex-shrink md:px-2 font-bold text-[--yellow] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
                : ` md:text-text text-text-xs basis-auto flex-shrink md:px-2 font-bold text-[--red] hover:text-[--red] hover:scale-105 transition-all hover:translate-y-[-10px] `
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

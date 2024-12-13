import { getBands } from "@/lib/api";
import { GoDotFill } from "react-icons/go";
import ButtonSharpEdge from "./common/ButtonSharpEdge";
import Link from "next/link";

async function ForsideLineUp() {
  const bands = await getBands();

  console.log(bands[22]);
  return (
    <ul className="flex  flex-wrap gap-2 justify-center px-[50px]">
      {bands.slice(0, 50).map((band, i) => (
        <li className="flex items-center gap-5">
          <Link
            href={`/lineup/${band.slug}`}
            className={
              i <= 15
                ? ` text-step-3  hover:text-rose-600 hover:scale-110 transition-all hover:translate-y-[-10px] `
                : i <= 25
                ? `text-step-2  hover:text-rose-600 hover:scale-110 transition-all  after:pl-4  hover:translate-y-[-10px] `
                : i <= 40
                ? `text-step-1 hover:text-rose-600 hover:scale-110 transition-all  after:pl-4  hover:translate-y-[-10px] `
                : ` text-text hover:text-rose-600 hover:scale-110 transition-all hover:translate-y-[-10px] `
            }
            key={i}
          >
            {band.name}
          </Link>
          <GoDotFill className="fill-red" />
        </li>
      ))}
      <ButtonSharpEdge theme={"black"}>
        <Link href={`/line_up`}>See the whole line up</Link>
      </ButtonSharpEdge>
    </ul>
  );
}

export default ForsideLineUp;

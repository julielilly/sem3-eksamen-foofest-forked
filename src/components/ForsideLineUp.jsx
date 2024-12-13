import { getBands } from "@/lib/api";
import { GoDotFill } from "react-icons/go";
async function ForsideLineUp() {
  const bands = await getBands();

  console.log(bands[22]);
  return (
    <ul className="flex  flex-wrap gap-5 justify-center px-[50px]">
      {bands.map((band, i) => (
        <li className="flex items-center gap-5">
          <span
            className={
              i < 25
                ? ` text-step-3 text-slate-700 hover:text-rose-600 hover:scale-110 transition-all hover:translate-y-[-10px] `
                : `text-slate-700 hover:text-rose-600 hover:scale-110 transition-all  after:pl-4  hover:translate-y-[-10px] `
            }
            key={i}
          >
            {band.name}
          </span>
          <GoDotFill className="fill-red" />
        </li>
      ))}
    </ul>
  );
}

export default ForsideLineUp;

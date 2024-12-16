"use client";
import Link from "next/link";
import Image from "next/image";
const url = process.env.NEXT_PUBLIC_API_URL; // data bliver inhentet fra .env.local

const LineUpCardCTA = ({ artistName, scene, dayOfPlaying, id, src, slug }) => {
  return (
    <Link key={id} href={`/lineup/${slug}`}>
      <li className="flex flex-col justify-between gap-3 h-[100%] min-h-[300px] min-w-10 max-w-[300px] relative w-fit border-2 border-foreground p-5">
        <span className="absolute top-1 left-0 font-bold text-text backdrop: border-l-0 text-text bg-background text-foreground w-fit py-1xs pr-s pl-l rounded-r-full  border-2 border-foreground text-nowrap">
          {scene}
        </span>
        <Image
          src={src.startsWith("https:") ? src : `${url}/logos/${src}`}
          alt={`image of the band ${artistName}`}
          height={500}
          width={500}
          className="border-2 border-foreground h-[100%] object-cover"
        />

        <div className="flex flex-col-reverse md:flex-col md:gap-2 halfround-right md:border-none md:bg-background  md:text-foreground md:py-0 md:pr-0  md:pl-0 md:rounded-none text-nowrap absolute bottom-2 left-0  md:relative">
          <h6 className="font-bold text-text capitalize md:halfround-right">
            {artistName}
          </h6>
          <p className=" text-text">{dayOfPlaying}</p>
        </div>
      </li>
    </Link>
  );
};

export default LineUpCardCTA;

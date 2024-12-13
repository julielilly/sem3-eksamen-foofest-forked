"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const LineUpCardCTA = ({ artistName, scene, dayOfPlaying, id, src, slug }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 600);
  }, []);

  return (
    <Link key={id} href={`/lineup/${slug}`}>
      <li className="flex flex-col min-w-10 max-w-[300px] gap-3 relative w-fit border-2 border-foreground p-5">
        <span className="absolute top-1 left-0 font-bold text-text backdrop: border-l-0 text-text bg-background text-foreground w-fit py-1xs pr-s pl-l rounded-r-full  border-2 border-foreground text-nowrap">
          {scene}
        </span>
        <Image
          src={src.startsWith("https:") ? src : `/${src}`}
          alt={`image of the band ${artistName}`}
          height={200}
          width={300}
          className="border-2 border-foreground"
        ></Image>

        <div
          className={isMobile ? "halfround-right absolute bottom-2 left-0" : ""}
        >
          <h6
            className={
              isMobile
                ? "font-bold text-text capitalize "
                : "halfround-right font-bold text-text capitalize"
            }
          >
            {artistName}
          </h6>
          <p className=" text-text">{dayOfPlaying}</p>
        </div>
      </li>
    </Link>
  );
};

export default LineUpCardCTA;

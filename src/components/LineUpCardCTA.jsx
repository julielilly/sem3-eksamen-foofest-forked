"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const LineUpCardCTA = ({ artistName, scene, dayOfPlaying, id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 600);
  }, []);

  return (
    <Link href={`/line_up/${id}`}>
      <li className="flex flex-col gap-3 relative w-fit border-2 border-foreground p-5">
        <span className="absolute top-1 left-0 font-bold text-text backdrop: border-l-0 text-text bg-background text-foreground w-fit py-1xs pr-s pl-l rounded-r-full  border-2 border-foreground text-nowrap">
          {scene}
        </span>
        <Image
          src={"/favicon.ico"}
          alt={"image of something"}
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
                ? "font-bold text-step-1 capitalize"
                : "halfround-right font-bold text-step-1 capitalize"
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

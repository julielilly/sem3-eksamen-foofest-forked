"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { easeInOut } from "motion";
const url = process.env.NEXT_PUBLIC_API_URL; // data bliver inhentet fra .env.local

const LineUpCardCTA = ({ artistName, scene, dayOfPlaying, id, src, slug }) => {
  return (
    <motion.li
      className="bg-background"
      whileHover={{
        zIndex: 10,
        translateY: "-10px",
        translateX: "-10px",
        boxShadow: "15px 15px 0px -5px var(--foreground)",
        backgroundColor: "var(--white)",
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: "var(--white)",
        boxShadow: "none",
        translateY: "0",
        translateX: "0",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <Link
        key={id}
        href={`/lineup/${slug}`}
        className="flex flex-col justify-between gap-s h-[100%] min-h-[300px]  max-w-[300px] w-fit relative border-2 border-foreground p-5"
      >
        <span className="absolute top-1.5 left-0 font-bold text-text border-l-0 bg-background text-foreground w-fit py-2 px-s  rounded-r-full  border-2 border-foreground text-nowrap text-center">
          {`Scene ${scene}`}
        </span>
        <Image
          src={src.startsWith("https") ? src : `${url}logos/${src}`}
          alt={`image of the band ${artistName}`}
          height={500}
          width={500}
          className="border-2 border-foreground h-[100%] object-cover"
        />

        <div className="halfround-right text-wrap absolute bottom-2 left-0  md:relative w-fit max-w-[90%]">
          {artistName}
        </div>
      </Link>
    </motion.li>
  );
};

export default LineUpCardCTA;

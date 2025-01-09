"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import BoatImg from "@/app/assets/boat.svg";

//super charger componentet
const MotionImage = motion(Image);

function MotionImageBoat() {
  return (
    <div className=" absolute z-10 top-[-16%] md:top-[-20%]  left-[-20%]  aspect-auto w-[50%] md:w-[100%] transition animate-none md:animate-[sailTravle_30s_linear_infinite] ">
      <MotionImage
        className=" h-[100%]  origin-center cursor-grab "
        drag
        dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
        src={BoatImg}
        alt={"image of boat"}
        height={150}
        width={150}
        animate={{
          rotate: [10, 5, -10, 5, 10],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}

export default MotionImageBoat;

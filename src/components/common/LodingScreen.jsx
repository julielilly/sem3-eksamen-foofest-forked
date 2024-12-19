import Image from "next/image";
import BoatImg from "@/app/assets/boat.svg";
import waveImage from "@/app/assets/single_wave.svg";

const LoadingScreen = () => {
  return (
    <div className="  h-[100vh] w-[100%] flex flex-col items-center justify-center bg-background z-50 fixed left-0 ">
      <Image
        src={BoatImg}
        alt={"image of something"}
        height={200}
        width={200}
        className="origin-center  transition animate-[sail_5s_linear_infinite]   "
      ></Image>
      <div className="flex   ">
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={100}
          className=" transition animate-[singlewave_1s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={100}
          className=" transition animate-[singlewave_1.1s_infinite]"
        ></Image>
        <Image
          src={waveImage}
          alt={"image of something"}
          height={100}
          width={100}
          className=" transition  animate-[singlewave_1s_infinite] "
        ></Image>
      </div>
      <h2 className="text-step-2 py-5 ">Loading Foo Fest. . .</h2>
    </div>
  );
};

export default LoadingScreen;

import Image from "next/image";

const page = ({ params }) => {
  // const { id } = params;

  return (
    <div>
      <header>
        <Image
          src={"/favicon.ico"}
          alt={"image of something"}
          height={300}
          width={200}
          className="w-[100%] h-[500px] object-cover object-top"
        ></Image>
        <img
          src="/wave.svg"
          alt="Logo "
          className="w-[100%] h-[50px] bg-rose-300 object-contain"
        />
      </header>

      <h1>Artist WOOO</h1>

      <div className="absolute top-1 left-0 font-bold text-text backdrop: border-l-0 text-text bg-background text-foreground w-fit py-1xs pr-s pl-l rounded-r-full  border-2 border-foreground text-nowrap">
        <p>scene</p>
        <h2>Midgard</h2>
      </div>
    </div>
  );
};

export default page;

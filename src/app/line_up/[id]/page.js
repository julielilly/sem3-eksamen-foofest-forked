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
    </div>
  );
};

export default page;

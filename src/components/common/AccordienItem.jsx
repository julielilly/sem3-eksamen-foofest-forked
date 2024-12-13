"use client";
import Dot from "./Dot";

const AccordienItem = ({ answer, question, item, isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => {
        isOpen === item ? setIsOpen(0) : setIsOpen(item);
      }}
      className="md:flex md:flex-col  w-[100%] py-2 "
    >
      <section className="px-3 w-[100%]   bg-white border-2 border-foreground text-text text-forground flex flex-row justify-between items-center rounded-r-full">
        <h2 className="text-md capitalize m-3">{question}</h2>

        {isOpen === item ? (
          <Dot isOpen={isOpen} item={item}></Dot>
        ) : (
          <Dot isOpen={isOpen} item={item}></Dot>
        )}
      </section>
      {isOpen === item && (
        <section className="px-6 py-2 my-2 mr-2 md:rounded-b-full rounded-b-3xl bg-white border-2 border-foreground text-text text-forground ">
          <p className="first-letter:capitalize">{answer}</p>
        </section>
      )}
    </button>
  );
};

export default AccordienItem;

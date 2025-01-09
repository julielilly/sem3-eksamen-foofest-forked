"use client";
import { easeInOut, spring } from "motion";
import Dot from "./Dot";
import { motion, AnimatePresence } from "motion/react";

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

      <AnimatePresence initial={false} mode="popLayout">
        {isOpen === item && (
          <motion.section
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            // transition={{ duration: 0.65, ease: "easeInOut" }}
            className="w-[100%] px-12 py-2 my-2 mr-2 md:rounded-b-[30px] rounded-b-3xl bg-white border-2 border-foreground text-text text-forground "
          >
            <p className="first-letter:capitalize">{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AccordienItem;

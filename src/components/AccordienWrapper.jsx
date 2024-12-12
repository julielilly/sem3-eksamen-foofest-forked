"use client";
import AccordienItem from "./AccordienItem";
import { useState } from "react";

const AccordienWrapper = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="mx-auto md:w-[60%] my-5">
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={1}
        question="what is Foo Fest?"
        answer="Foo Fest is a seven-day music festival in Norhaven, inspired by Norse mythology. It features world-class performances across three themed stages and immersive camping experiences."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={2}
        question="When and where does Foo Fest take place?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={3}
        question="What are the stages?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={4}
        question="What camping options are available?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={5}
        question="Can I cancel or modify my reservation?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={6}
        question="Are there spontaneous events at Foo Fest?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={7}
        question="What should I bring?"
        answer="vise en liste af spørgsmål eller overskrifter, en bruger kan klikke på for at udvide og se det tilhørende svar eller indhold. Kun én svar/ indholds sektion må være åben ad gangen, så designet holdes ryddeligt og struktureret."
      ></AccordienItem>
    </div>
  );
};

export default AccordienWrapper;

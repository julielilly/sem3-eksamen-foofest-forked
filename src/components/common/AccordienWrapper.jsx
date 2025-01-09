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
        answer="Foo Fest will be held from June 10-16, 2024, in Norhaven, a mystical town that perfectly blends nature and myth, making it the ultimate backdrop for this epic event."
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={3}
        question="What are the stages?"
        answer={
          <ul>
            <li className="list-item list-disc text-left">
              Midgard Stage: The heart of the festival featuring major
              headliners and crowd favorites.
            </li>
            <li className="list-item list-disc text-left">
              Vanaheim Stage: Known for its eclectic blend of indie, folk, and
              experimental artists.
            </li>
            <li className="list-item list-disc text-left">
              Jotunheim Stage: For those who crave energy, with rock, metal, and
              electronic performances.
            </li>
          </ul>
        }
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={4}
        question="What camping options are available?"
        answer={
          <ul>
            <li className="list-item list-disc text-left  ">
              Svartheim (<strong>400 spots</strong>): Shaded and secluded,
              perfect for those seeking quiet retreats.
            </li>
            <li className="list-item list-disc text-left">
              Nilfheim (<strong>300 spots</strong>): Cool and misty, ideal for a
              mystical vibe.
            </li>
            <li className="list-item list-disc text-left">
              Helheim (<strong>100 spots</strong>): Intense and fiery, close to
              the action.
            </li>
            <li className="list-item list-disc text-left">
              Muspelheim (<strong>200 spots</strong>): A vibrant, social hotspot
              for party-goers.{" "}
            </li>

            <li className="list-item list-disc text-left">
              Alfheim (<strong>250 spots</strong>): Bright, open spaces with a
              serene atmosphere.{" "}
            </li>
          </ul>
        }
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={5}
        question="Can I cancel or modify my reservation?"
        answer="If your reservation expires before being fulfilled, the spot will reopen to others. Ensure you confirm or modify your booking within the time limit to secure your place.
"
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={6}
        question="Are there spontaneous events at Foo Fest?"
        answer="Absolutely! Expect surprise performances, pop-up activities, and mythical encounters throughout the festival. Keep your eyes open—you never know when the gods will summon something extraordinary.
"
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={7}
        question="What should I bring?"
        answer="Essentials include your ticket, camping gear, comfortable clothing, sunscreen, reusable water bottles, and your best festival spirit. Prepare for both sun and rain!"
      ></AccordienItem>
      <AccordienItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={8}
        question="Is Foo Fest family-friendly?"
        answer="Yes! Foo Fest offers a range of activities for all ages, though some areas and performances may be best suited for adult audiences."
      ></AccordienItem>
    </div>
  );
};

export default AccordienWrapper;

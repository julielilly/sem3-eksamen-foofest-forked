"use client";

import { TicketData } from "@/stores/TicketState";
import { useEffect, useState } from "react";
import { getAvailableSpots } from "@/lib/api";
import AddToIncrement from "../common/AddToIncrement";

const CampingAreaSelection = ({ campingAreas, setCampingAreas, register }) => {
  const {
    two_person_tents,
    three_person_tents,
    camping_area,
    selectCampingArea,
    incrTwoPersonTents,
    decrTwoPersonTents,
    incrThreePersonTents,
    decrThreePersonTents,
    green_camping,
    setGreenCamping,
  } = TicketData();

  const [isVisible, setIsVisible] = useState(false); // used for hover effect on green camping information
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if the device is a touch device
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  const handleToggle = () => {
    if (isTouchDevice) {
      setIsVisible(!isVisible);
    }
  };

  // Fetch available camping areas once on component mount
  useEffect(() => {
    async function fetchCampingAreas() {
      const data = await getAvailableSpots();
      setCampingAreas(data);
    }
    fetchCampingAreas();
  }, []);

  return (
    <fieldset
      className="_step_2_select_camping_"
      aria-labelledby="camping-header"
    >
      <h2 className="before:w-1/2" id="camping-header">
        Select camping area
      </h2>

      <div>
        {/* Camping area group */}
        <div className="_camping_area_ grid grid-cols-2 gap-m py-m">
          {campingAreas.map((area, index) => {
            // styles buttons depending on if they are to left or right, and depending on whether total amount of buttons are odd/even
            const isLast = index === campingAreas.length - 1;
            const isOdd = campingAreas.length % 2 !== 0;

            // specific style for the LAST camping area button IF total areas are odd numbered.
            const buttonClasses = `
    ${
      isLast && isOdd
        ? "col-span-2 halfround-right border-r-2 w-[75%] max-w-[80%] m-auto"
        : ""
    }
    ${
      !isLast && index % 2 === 0
        ? "halfround-right border-l-0" // styles odd buttons
        : "halfround-left border-r-0" // styles even buttons
    } 
    inline-block _option_ w-full text-center text-normal font-bold tracking-wide py-2xs bg-background text-foreground
    hover:bg-lightblue hover:text-white 
    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-opacity-50
    peer-checked:bg-foreground peer-checked:text-background  cursor-pointer
  `;

            return (
              <div
                key={area.area}
                className={`relative  ${
                  isLast && isOdd ? "col-span-2 flex justify-center" : ""
                }`}
              >
                <input
                  type="radio"
                  id={`camping-area-${index}`}
                  {...register("campingArea")}
                  value={area.area}
                  checked={camping_area === area.area}
                  onChange={() => {
                    selectCampingArea(area.area); // Select camping area
                  }}
                  className="sr-only peer"
                />
                <label
                  htmlFor={`camping-area-${index}`}
                  className={buttonClasses}
                >
                  {area.area}
                  <div className="text-xs font-normal tracking-none mt-1">
                    Available: {area.available}
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="_tent_selection_  px-m text-center ">
        <h3 className="underline-border before:top-0">RENT A TENT</h3>

        <div className="_2-3_person_tent_ grid gap-s pb-s">
          <section className="flex justify-between items-center">
            <div>
              <input
                className="appearance-none hidden"
                type="checkbox"
                id="two-person-tent"
                checked={two_person_tents > 0}
                onChange={incrTwoPersonTents}
              />
              <label
                htmlFor="two-person-tent"
                className="text-normal tracking-wide"
              >
                2-person tent
              </label>
              <p className="text-lightblue font-light italic">299kr per tent</p>
            </div>

            <AddToIncrement
              count={two_person_tents}
              increment={incrTwoPersonTents}
              decrement={decrTwoPersonTents}
            />
          </section>
          <section className="flex justify-between items-center">
            <div>
              <input
                className="appearance-none hidden"
                type="checkbox"
                id="three-person-tent"
                checked={three_person_tents > 0}
                onChange={incrThreePersonTents}
                {...register("twoPersonTents")}
              />
              <label
                htmlFor="three-person-tent"
                className="text-normal tracking-wide"
              >
                3-person tent
              </label>
              <p className="text-lightblue font-light italic">399kr per tent</p>
            </div>

            <AddToIncrement
              count={three_person_tents}
              increment={incrThreePersonTents}
              decrement={decrThreePersonTents}
            />
          </section>
        </div>
        <div className="_add_green_camping_ grid place-content-center">
          <h3 className="underline-border before:top-0  ">ADDITIONAL</h3>

          <div className="flex place-items-center gap-2xs cursor-pointer ">
            <input
              type="checkbox"
              id="green-camp"
              className="custom-check "
              {...register("threePersonTents")}
              checked={green_camping} // Bind the checkbox's checked state to the Zustand store
              onChange={() => setGreenCamping()} // Toggle green_camping state on change
            />
            <label htmlFor="green-camp" className="_option_ cursor-pointer">
              Add green camping?
            </label>
            <p className="italic text-lightblue">249kr</p>
            <div className="_information_green_camping_ relative group">
              <p
                className="cursor-pointer italic font-serif text-white bg-black hover:bg-lightblue px-2.5 rounded-full "
                onClick={handleToggle}
              >
                i
              </p>
              <p
                className={`absolute ${
                  isVisible ? "block" : "hidden"
                }  group-hover:block  bg-lightblue text-sm text-white rounded-md p-2 shadow-lg w-64 -right-1/2 top-8 z-10`}
              >
                Upgrade to Green Camping for a secluded spot in a lush, green
                area near the festival, offering peace, nature, and a unique
                camping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CampingAreaSelection;

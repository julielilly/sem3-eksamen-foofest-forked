"use client";
import Image from "next/image";
import BoatImg from "@/app/assets/boat.svg";
import SpeakerImg from "@/app/assets/speaker.svg";
import SpeakerImgRight from "@/app/assets/speakerRight.svg";
import { TicketData } from "@/stores/TicketState";

const FormTicketBig = ({ theme = "general" }) => {
  // accessing the TicketData state where name and email is stored
  const { participants } = TicketData();

  // Extract the first participant's details
  const firstParticipant = participants?.[0] || {};
  const { name, email } = firstParticipant;

  const themeClasses = {
    general: {
      title: "General Admission",
      description:
        "Full access to all stages, general camping, and festival activities.",
    },
    vip: {
      title: "VIP",
      description:
        "Priority entry, exclusive viewing areas, VIP lounges, and premium amenities.",
    },
    confirmed: {
      title: `You're in, ${name}!`,
      description: `A confirmation email has been sent to ${
        email || "your email"
      }.`,
    },
  };
  const { title, description } = themeClasses[theme] || themeClasses.neutral;

  return (
    <div
      className="_big_ticket_ grid [&>*]:col-start-1
            [&>*]:row-start-1  justify-items-center"
    >
      {theme === "confirmed" && (
        <div>
          <Image
            src={SpeakerImg}
            alt={"image of Speaker"}
            height={200}
            width={200}
            className="origin-bottom  transition animate-[puls20deg_2s_linear_infinite] absolute top-[35%] left-[10%]  -z-20 hidden md:block"
          ></Image>
          <Image
            src={SpeakerImg}
            alt={"image of Speaker"}
            height={200}
            width={200}
            className="origin-bottom  transition rotate-[20deg] md:animate-[puls30deg_1s_linear_infinite] absolute md:top-[15%] top-[15%] md:right-[40%] right-[10%]  -z-20 md:scale-100 scale-50"
          ></Image>
          <Image
            src={SpeakerImgRight}
            alt={"image of Speaker"}
            height={200}
            width={200}
            className="origin-bottom  transition rotate-[-30deg] md:animate-[puls-30deg_1.5s_linear_infinite] absolute md:top-[15%] top-[10%]  md:left-[35%] left-[15%] -z-20 md:scale-100 scale-75  "
          ></Image>
          <Image
            src={SpeakerImgRight}
            alt={"image of Speaker"}
            height={200}
            width={200}
            className="origin-bottom  transition animate-[puls-20deg_1s_linear_infinite] absolute top-[35%] right-[10%] rotate-[-10deg] -z-20 md:block hidden "
          ></Image>
        </div>
      )}

      <svg
        className="_svg_border_  mob:ticket-width rotate-90 xxl:rotate-0 relative -z-10 transition-transform ticket-big-rotate  my-[16dvh] xxl:-my-0  "
        viewBox="0 0 407 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.0085 2H2V10.834C5.86599 10.834 9 13.968 9 17.834C9 21.7 5.86599 24.834 2 24.834V30.666C5.86599 30.666 9 33.8 9 37.666C9 41.532 5.86599 44.666 2 44.666V50.5C5.86599 50.5 9 53.634 9 57.5C9 61.366 5.86599 64.5 2 64.5V71.5C5.86599 71.5 9 74.634 9 78.5C9 82.366 5.86599 85.5 2 85.5V91.334C5.86599 91.334 9 94.468 9 98.334C9 102.2 5.86599 105.334 2 105.334V111.166C5.86599 111.166 9 114.3 9 118.166C9 122.032 5.86599 125.166 2 125.166V131C5.86599 131 9 134.134 9 138C9 141.866 5.86599 145 2 145V152C5.86599 152 9 155.134 9 159C9 162.866 5.86599 166 2 166V171.834C5.86599 171.834 9 174.968 9 178.834C9 182.7 5.86599 185.834 2 185.834V191.666C5.86599 191.666 9 194.8 9 198.666C9 202.532 5.86599 205.666 2 205.666V214H68.0085C68.0028 213.834 68 213.667 68 213.5C68 205.492 74.4919 199 82.5 199C90.5081 199 97 205.492 97 213.5C97 213.667 96.9972 213.834 96.9915 214H311.008C311.003 213.834 311 213.667 311 213.5C311 205.492 317.492 199 325.5 199C333.508 199 340 205.492 340 213.5C340 213.667 339.997 213.834 339.992 214H405V205.666C401.134 205.666 398 202.532 398 198.666C398 194.8 401.134 191.666 405 191.666V185.834C401.134 185.834 398 182.7 398 178.834C398 174.968 401.134 171.834 405 171.834V166C401.134 166 398 162.866 398 159C398 155.134 401.134 152 405 152V145C401.134 145 398 141.866 398 138C398 134.134 401.134 131 405 131V125.166C401.134 125.166 398 122.032 398 118.166C398 114.3 401.134 111.166 405 111.166V105.334C401.134 105.334 398 102.2 398 98.334C398 94.468 401.134 91.334 405 91.334V85.5C401.134 85.5 398 82.366 398 78.5C398 74.634 401.134 71.5 405 71.5V64.5C401.134 64.5 398 61.366 398 57.5C398 53.634 401.134 50.5 405 50.5V44.666C401.134 44.666 398 41.532 398 37.666C398 33.8 401.134 30.666 405 30.666V24.834C401.134 24.834 398 21.7 398 17.834C398 13.968 401.134 10.834 405 10.834V2H339.992C339.728 9.77661 333.341 16 325.5 16C317.659 16 311.272 9.77661 311.008 2H96.9915C96.728 9.77661 90.3408 16 82.5 16C74.6592 16 68.272 9.77661 68.0085 2Z"
          fill="#FFFDF2"
          stroke="black"
          strokeWidth={1}
        />

        <path
          d="M35.5 25.5H69.0416L69.1841 25.7592C71.7422 30.4141 76.9598 33.6194 83 33.6194C89.0402 33.6194 94.2578 30.4141 96.8159 25.7592L96.9584 25.5H311.05L311.17 25.8293C313.231 31.5042 319.016 35.6194 325.861 35.6194C332.707 35.6194 338.491 31.5042 340.552 25.8293L340.672 25.5H371.5V190.5H339.841L339.73 190.151C337.841 184.209 331.915 179.84 324.861 179.84C317.807 179.84 311.881 184.209 309.992 190.151L309.882 190.5H98.2275L98.1361 190.116C96.6086 183.688 90.4315 178.84 83 178.84C75.5685 178.84 69.3914 183.688 67.8639 190.116L67.7725 190.5H35.5V25.5ZM36.5 26.5V189.5H66.9879C68.7804 182.782 75.2882 177.84 83 177.84C90.7118 177.84 97.2196 182.782 99.0121 189.5H309.155C311.3 183.297 317.536 178.84 324.861 178.84C332.186 178.84 338.422 183.297 340.567 189.5H370.5V26.5H341.368C339.055 32.4196 332.972 36.6194 325.861 36.6194C318.75 36.6194 312.667 32.4196 310.354 26.5H97.5465C94.7588 31.3429 89.2818 34.6194 83 34.6194C76.7182 34.6194 71.2412 31.3429 68.4535 26.5H36.5Z"
          fill="black"
        />
        {/* removes line in ticket if theme is confirmed  */}
        {theme !== "confirmed" && (
          <path
            d="M36 108L371 108L371 109L36 109L36 108Z"
            fill="black"
            className="rotate-90 scale-x-[0.63] xxl:scale-x-100 xxl:rotate-0 transition-transform origin-center opacity-45"
          />
        )}
      </svg>

      {theme !== "confirmed" && (
        <div className="_big_ticket_text_ grid grid-rows-[1fr,1fr] h-80  place-self-center place-items-center md:h-auto text-center  ">
          <h3 className=" text-step-2 font-germania-one place-content-center max-w-min xxl:max-w-max">
            {title}
          </h3>

          <p className="relative py-2xs mob:px-2xs ticket-big-text-rotate-mobile mob:ticket-big-text-rotate xxl:ticket-big-text place-content-center">
            {description}
          </p>
        </div>
      )}

      {theme === "confirmed" && (
        <div className="_big_ticket_text_ grid grid-rows-[1fr,1fr] h-80  place-self-center place-items-center md:h-auto text-center  ">
          <h3 className=" text-step-2 font-germania-one place-content-center ticket-big-text-rotate-mobile mob:ticket-big-text-rotate xxl:ticket-big-text">
            {title}
          </h3>
          <Image
            src={BoatImg}
            alt={"image of Boat"}
            height={80}
            width={80}
            className="origin-center  transition animate-[sail_5s_linear_infinite] m-auto  "
          />

          <p className="relative py-2xs mob:px-2xs ticket-big-text-rotate-mobile mob:ticket-big-text-rotate xxl:ticket-big-text place-content-center">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormTicketBig;

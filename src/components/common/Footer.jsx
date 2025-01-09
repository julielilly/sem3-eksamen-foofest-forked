import Image from "next/image";
import Border from "@/app/assets/border.svg";
import Facebook from "@/app/assets/icons/facebook.svg";
import X from "@/app/assets/icons/x.svg";
import Instagram from "@/app/assets/icons/instagram.svg";
import Circle from "@/app/assets/circle.svg";
import Link from "next/link";
import FooterForm from "../form/FooterForm";

import MotionImageBoat from "./MotionImageBoat";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background w-full relative font-hind-madurai ">
      <MotionImageBoat></MotionImageBoat>

      <Image
        src={Border}
        alt="line border"
        width={1600}
        height={100}
        className="absolute top-[-45px] w-full h-[90px] object-cover object-center mix-blend-difference"
      />

      <div className="col-main ">
        <div className="grid gap-l grid-cols-1 sm:grid-cols-2 py-2xl lg:grid-cols-3">
          {/* contact */}
          <div id="contact">
            <h3 className="text-step-3 font-germania-one pb-s">Contact</h3>

            <p>
              <strong>Festival Headquarters:</strong> <br /> Norhaven, Mythical
              Grounds, <br />
              Midgard Plaza <br /> Email:
              <span className="underline"> info@foofest2024.com </span>
              <br /> Phone: +45 123 456 789
            </p>

            <div className="flex gap-xs pt-s ">
              <Image
                src={Facebook}
                alt="facebook icon"
                width={30}
                height={30}
                className="cursor-pointer fill-green hover:scale-110 transition-all"
              />
              <Image
                src={X}
                alt="X icon"
                width={30}
                height={30}
                className="cursor-pointer hover:scale-110 transition-all"
              />
              <Image
                src={Instagram}
                alt="instagram icon"
                width={30}
                height={30}
                className="cursor-pointer hover:scale-110 transition-all"
              />
            </div>
          </div>

          {/* About us */}
          <div className="relative ">
            <Image
              src={Circle}
              alt="circle"
              width={300}
              height={300}
              className="absolute top-[35%] lg:top-[30%] left-1/4 transform -translate-x-1/2 -translate-y-1/2  object-cover mix-blend-difference hidden sm:block"
            />
            <Image
              src={Circle}
              alt="circle"
              width={130}
              height={130}
              className="absolute top-[80%] lg:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  object-cover mix-blend-difference hidden sm:block"
            />

            <div className="sm:pl-6 relative z-10 sm:text-foreground">
              <h3 className="text-step-3 font-germania-one pb-s">About us</h3>
              <div className="flex flex-col ">
                <Link
                  className=" hover:scale-110 transition-all origin-left"
                  href={"/about#faq"}
                >
                  FAQ
                </Link>
                <Link
                  className=" hover:scale-110 transition-all origin-left"
                  href={"/about"}
                >
                  About us
                </Link>
                <Link
                  className=" hover:scale-110 transition-all origin-left"
                  href={"#contact"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* stay updated */}
          <div className="-order-1 sm:col-span-2 lg:col-span-1 lg:order-1 mb-xs">
            <h3
              className="text-step-3 font-germania-one pb-s"
              id="form-footer-header"
            >
              Stay updated
            </h3>
            <FooterForm />
          </div>
        </div>

        <div className="text-center mb-xl font-normal ">
          © 2024 Foo Fest. All Rights Reserved. Designed in Norhaven. <br />{" "}
          Powered by Norse Legends & Music.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Image from "next/image";
import bg_image from "../../public/portfolio_bg-1.png";
import webdev from "../app/image/web_dev.png";
import Navbar from "./component/Navbar";
import { animated, useSpring, SpringValue } from "@react-spring/web";
import About from "./component/About";
import Form from "./component/Form";
import Attributes from "./component/Attributes";
import { useEffect, useState } from "react";
import Technologies from "./component/Technologies";
import Footer from "./component/Footer";

export default function Home() {
  const [spring, setSpring] = useState({});
  interface AnimatedStyleProps {
    from: number;
    to: number;
  }

  const ispring = useSpring<AnimatedStyleProps>({
    from: { x: -400 },
    to: { x: 0 },
  });

  useEffect(() => {
    setSpring(ispring);
  }, []);

  return (
    <div className={`h-full w-full  text-white  px-4`}>
      <section className="mt-32 mb-20 h-screen pl-5 pr-20 md:py-36 lg:pt-48 lg:pl-64 flex">
        <div className="">
          <animated.h2
            className={`text-orange-500`}
            style={{
              ...spring,
            }}
          >
            Welcome to Codewar Software Solutions
          </animated.h2>
          <animated.h1
            className="font-bold text-5xl leading-normal tracking- py-5"
            style={{
              ...spring,
            }}
          >
            Cooking Imagination <br />
            in the Pot of development
          </animated.h1>
          <animated.h2
            className={`text-gray-200 lg:mr-20 `}
            style={{
              ...spring,
            }}
          >
            We're dedicated to pushing the boundaries of technology and creating
            software solutions that makes a difference
          </animated.h2>
          {/* <h1 className="font-bold text-5xl">
            Cooking Imagination <br />
            in the Pot of development
          </h1> */}
        </div>
        <div className="hidden lg:block  w-1/2 ">
          <Image width={1200} src={webdev} alt="bg" />
        </div>
      </section>

      <div>
        <About />
      </div>

      <div className="pt-40">
        <Attributes />
      </div>

      <div className="pt-40">
        <Technologies />
      </div>
      <div className="pt-40 pb-40">
        <Form />
      </div>
    </div>
  );
}

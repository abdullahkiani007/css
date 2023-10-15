import Image from "next/image";
import React from "react";
import aboutus from "../../app/image/aboutus.jpg";

function About() {
  return (
    <>
      <div className=" md:flex md:flex-col lg:flex-row md:items-center lg:items-start pl-2 lg:px-60">
        <div className="lg:w-1/2 md:w-2/3" id="about">
          <Image src={aboutus} alt="aboutus" />
        </div>
        <div className="lg:w-1/2 md:w-2/3 lg:pl-10">
          <h2 className="  py-5 text-orange-600">
            About Codewar Software Solutions
          </h2>
          <h1 className="text-4xl pb-8">
            Transforming Complexity into Simplicity
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            eligendi, reprehenderit architecto possimus expedita sequi provident
            delectus quia nostrum totam inventore sit sed fugit officiis
            repellat dicta quisquam corporis temporibus. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Soluta eligendi, reprehenderit
            architecto possimus expedita sequi provident delectus quia nostrum
            totam inventore sit sed fugit officiis repellat dicta quisquam
            corporis temporibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

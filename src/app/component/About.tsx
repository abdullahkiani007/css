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
          <h2 className="  pb-2 text-orange-600">
            About Codewar Software Solutions
          </h2>
          <h1 className="text-4xl pb-8">
            Transforming Complexity into Simplicity
          </h1>
          <p className="text-gray-400 text-justify">
            Welcome to CodeWar Software Solutions, your strategic technology
            partner for innovative solutions. Our approach involves building
            cohesive teams with shared goals, offering a clean, economical entry
            and exit from development processes. We have expertise in Java,
            Rust, Python, and JavaScript. Committed to technical excellence, our
            managers lead custom development projects, ensuring a significant
            price/performance advantage. From Digital Healthcare to E-Learning,
            our versatile projects span various verticals. With over a year of
            experience, we pride ourselves on providing agile,quality solutions
            tailored to your needs. Choose CodeWar for a partnership that
            accelerates your success in the digital realm.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

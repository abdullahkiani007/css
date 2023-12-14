import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface BoxProps {
  title: string;
  image: string;
  style: string;
  id: string;
}

const text = [
  "For every client we invest in building a cohesive team with the shared goals and sense of ownership. We have perfected a clean, economical approach for entering and exiting client development processes at the right time using the right resources. Our expertise in the field supports every phase of the product lifecycle — be it application design, architecture, UX/UI, rapid development, QA and testing, and maintenance and support.",

  "We combine an in-depth understanding of clients’ needs and business drivers, commitment to service value and excellence with a fast and efficient approach to entering and exiting development lifecycle and baked-in quality assurance to help our clients speed up time to market and effectively compete with user-centric and scalable solutions.",

  "At CSS, we speak the language of software applications fluently. Our top-notch talent is skilled in various combinations of  Java, RUST, Python, JavaScript (MERN/T3), underlying platforms, IDEs, APIs as well as other languages, SDKs, databases and frameworks.",

  "Our highly-experienced technical manager lead custom software development, product engineering, while our two-shore delivery mechanism ensures a significant price/performance advantage. Our commitment to ongoing training, continuous learning, and integrated client collaboration keeps our teams up to speed on best-of-breed technologies, tools, automation and development methodologies.",

  "Our projects range from software development and quality assurance to support and maintenance of on-premises to cloud and SaaS applications in a variety of fields. CSS’s domain expertise encompasses a variety of verticals including development for Digital Healthcare and Life Sciences, E-Learning and Content Management, AdTech, Non-Profit, Universities, Social Networks, Financial Services, Manufacturing and Publishing.",

  "CSS’s one year of experience in custom Software Development, Web Development, SQA and AI/Machine Learning practices are defined by our ability to hire and retain excellent engineers and envelope them into rigorous processes. Client and project teams can be formed on-demand and persist for the duration of the project or entire relationship — from weeks to years, depending on the client’s needs, budget and software lifecycle stage.",
];
function Box(props: BoxProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupText = text[parseInt(props.id, 10) - 1];
  return (
    <div
      className={`bg-white w-52 h-52 m-8 flex flex-col items-center justify-center ${props.style}`}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {/* className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-200 p-4 rounded-lg shadow-lg" */}
      {showPopup && (
        <div className="text-start space-x-1 bg-gray-800 absolute w-96 h-96 text-black  p-10 lg:w-96 shadow-xl">
          <p className="text-white tracking-normal text-justify">{popupText}</p>
        </div>
      )}
      <div>
        <img src={props.image} alt="card" />
      </div>
      <h2 className="text-background pt-4 px-2">{props.title}</h2>
    </div>
  );
}

export default Box;

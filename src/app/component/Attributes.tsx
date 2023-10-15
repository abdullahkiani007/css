import React from "react";
import Box from "./Box";
import team from "../image/team.png";

function Attributes() {
  return (
    <div className="lg:px-60">
      <h1 className="text-4xl pb-10 text-orange-600">
        A trusted partner committed to delivering exceptional results
      </h1>

      {/* <div className="bg-white w-40 h-40 flex items-center justify-center">
        <h1 className="text-black  text-lg">Why CSS</h1>
      </div> */}

      {/* Mobile */}
      <div className="lg:hidden   text-center">
        <h1 className="font-bold text-xl py-2">
          Why Codewar Software Solutions
        </h1>
        <hr className="text-white w-40 ml-auto mr-auto" />
        <div className="flex flex-wrap justify-center">
          <Box
            style=""
            id="1"
            title="Software Development is a team sport"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/team-green.svg"
          />
          <Box
            style=""
            id="2"
            title="Accelerating Innovation one application at a time"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/gears-green.svg"
          />
          <Box
            style=""
            id="3"
            title="Top-notch Talent that Speaks your Language"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/team-green.svg"
          />
          <Box
            style=""
            id="4"
            title="Experienced  Managers Vetted Offshore Developers"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/team-green.svg"
          />
          <Box
            style=""
            id="5"
            title="Not just Domain Experience.Domain Expertise"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/team-green.svg"
          />
          <Box
            style=""
            id="6"
            title="The right team for the right project, scaled quickly"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/clock-green.svg"
          />
        </div>
      </div>

      {/* <div className="bg-orange-600 w-52 h-52 m-8 flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl py-2">
            Why Codewar Software Solutions
          </h1>
          <hr className="text-white w-40 ml-auto mr-auto" />
        </div> */}

      {/* Large Screens */}
      <div className="hidden lg:block   text-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-screen-xl mx-auto p-8">
          <Box
            style=""
            id="5"
            title="Not just Domain Experience.Domain Expertise"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/firewall-green.svg"
          />

          <Box
            style=""
            id="4"
            title="Experienced  Managers Vetted Offshore Developers"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/team-green.svg"
          />

          <Box
            style=""
            id="3"
            title="Top-notch Talent that Speaks your Language"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/globe-green.svg"
          />

          <Box
            style=""
            id="1"
            title="Software Development is a team sport"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/sport-green.svg"
          />
          {/* Main */}
          <div className="bg-orange-600 w-52 h-52 m-8 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl py-2">
              Why Codewar Software Solutions
            </h1>
            <hr className="text-white w-40 ml-auto mr-auto" />
          </div>

          <Box
            style=""
            id="2"
            title="Accelerating Innovation one application at a time"
            image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/gears-green.svg"
          />

          <div className="col-span-3 flex justify-center w-full pr-28 ml-5">
            <Box
              style=""
              id="6"
              title="The right team for the right project, scaled quickly"
              image="https://www.kandasoft.com/wp-content/themes/pinboard/dist/images/icons/tile/clock-green.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attributes;

import React from "react";
import Image from "next/image";

interface propstypes {
  name: string;
  logo: string;
}

function TechBox(props: propstypes) {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center hover:shadow-xl mt-4 space-y-4 hover:space-y-2 hover:font-bold ">
        <Image src={props.logo} alt="logo" height={70} width={70} />
        <h1 className="">{props.name}</h1>
      </div>
    </div>
  );
}

export default TechBox;

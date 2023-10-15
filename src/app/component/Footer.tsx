import React from "react";
import logo from "../image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto flex flex-col justify-center items-center space-y-3">
        <Image src={logo} alt="logo" width={200} />
        <p>&copy; 2023 Codewar Software Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState, useEffect } from "react";
import logo from "../image/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`bg-background pt-8  pb-8 overflow-hidden fixed top-0 w-full text-white lg:px-60 lg:pt-16`}
    >
      <div className="flex justify-between px-6 ">
        <div className="w-60 lg:w-72">
          <Image src={logo} alt="logo" />
        </div>

        {!toggle ? (
          <div className={`md:hidden`}>
            <AiOutlineMenu
              className={`text-white  w-10 h-7 hover:text-bold hover:cursor-pointer ${
                toggle && "text-gray-300"
              }`}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        ) : (
          <AiOutlineClose
            className={`text-white  w-10 h-7 md:hidden hover:text-bold hover:cursor-pointer ${
              toggle && "text-gray-300"
            }`}
            onClick={() => setToggle(!toggle)}
          />
        )}
        {/* Navbar */}
        <div className="hidden md:block mr-10">
          <Link
            className="hover:bg-gray-600 px-10     p-2  hover:font-bold"
            href={"#home"}
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-600 px-10     p-2  hover:font-bold"
            href={"#about"}
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-600 px-10    p-2  hover:font-bold"
            href={"#contact"}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={` w-full h-screen pl-4 md:hidden ${
          !toggle && "hidden"
        }  flex flex-col bg-black mt-6 px-2`}
      >
        <Link
          className="w-fit   py-3 hover:font-bold"
          href={"#home"}
          onClick={() => setToggle(false)}
        >
          Home
        </Link>
        <Link
          className="w-fit   py-3 hover:font-bold"
          href={"#about"}
          onClick={() => setToggle(false)}
        >
          About
        </Link>
        <Link
          className="w-fit  py-3 hover:font-bold"
          href={"#contact"}
          onClick={() => setToggle(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

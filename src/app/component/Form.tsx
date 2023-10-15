import React from "react";
import { useState, useEffect } from "react";
// import { useForm, ValidationError } from "@formspree/react";
import Popup from "./Popup";

function Forms() {
  const [nameFocus, setNameFocus] = useState(false);
  const [nameBlur, setNameBlur] = useState(false);
  const [name, setName] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);
  const [email, setEmail] = useState("");

  const [textFocus, setTextFocus] = useState(false);
  const [textBlur, setTextBlur] = useState(false);
  const [text, setText] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch("https://formspree.io/f/xknlkqww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          textarea: text,
        }),
      });
      console.log(response);
      setName("");
      setEmail("");
      setText("");
      setShowPopup(true);
    } catch (error) {
      // Handle network errors or other exceptions
    }
  };
  // const [state, handleSubmit] = useForm("myyqldqv");

  return (
    <div className="text-center flex flex-col items-center">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      <h1 className="text-2xl text-orange-600 text-center" id="contact">
        Get in Touch
      </h1>
      <hr className=" w-40 ml-auto mr-auto mt-3  border-orange-600" />
      <h2 className="mt-4 text-gray-400">
        Drop us a line about your project and one of our experts will be in
        touch with you
      </h2>
      <form
        // onSubmit={handleSubmit}

        className="mt-10 flex flex-col justify-center items-center  border border-gray-500 w-full md:w-1/2 rounded-lg px-10"
      >
        {/* Name */}
        <div
          className={`border h-16   rounded-lg px-10  mt-20 w-full text-start  py-5 ${
            nameFocus ? "border-orange-600" : "border-gray-600"
          }`}
        >
          <label
            htmlFor="name"
            className={`absolute text-gray-400  ${
              (nameFocus || name) && "-translate-y-5 -translate-x-4 text-sm"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            onFocus={() => {
              setNameFocus(true);
            }}
            onBlur={() => setNameFocus(false)}
            className="w-full bg-transparent focus:outline-none text-white text-base "
          />
        </div>

        {/* Email */}
        <div
          className={`border w-full  h-16 rounded-lg px-10  mt-5  text-start py-5 ${
            emailFocus ? "border-orange-600" : "border-gray-600"
          }`}
        >
          <label
            htmlFor="email"
            className={`absolute text-gray-400  ${
              (emailFocus || email) && "-translate-y-5 -translate-x-4 text-sm"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setEmailFocus(true);
            }}
            // onError={() => setDisabled(true)}
            onBlur={() => setEmailFocus(false)}
            className="w-full bg-transparent focus:outline-none text-white text-base "
          />
        </div>

        {/* Text Area */}
        <div
          className={`border w-full rounded-lg px-10  mt-5  text-start py-5  h-24 ${
            textFocus ? "border-orange-600" : "border-gray-600"
          }`}
        >
          <label
            htmlFor="textarea"
            className={`absolute text-gray-400  ${
              (textFocus || text) && "-translate-y-5 -translate-x-4 text-sm"
            }`}
          >
            How can We help?
          </label>
          <textarea
            id="textarea"
            name="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => {
              setTextFocus(true);
            }}
            onBlur={() => setTextFocus(false)}
            className=" w-full  bg-transparent focus:outline-none text-white text-base resize-none "
          />
        </div>
        <button
          className={`bg-white disabled:bg-gray-400 text-gray-700 p-2 w-full md:w-1/2 rounded-full font-bold m-10 }`}
          disabled={(!email || !name) && true}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;

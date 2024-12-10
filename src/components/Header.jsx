import React from "react";
import { useStateContext } from "../utils/contextProvider";

const Header = () => {
  // const [ham, setHam] = useState("open");
  const {ham, triggerHam} = useStateContext();

  return (
    <header className="w-screen h-[40vh] pt-6">
      {ham === "open" ? (
        <img
          src="/images/icon-hamburger.svg"
          alt="hamburger open"
          className="absolute right-8 top-7 z-30 md:hidden"
          onClick={triggerHam}
        />
      ) : (
        <img
          src="/images/icon-close-menu.svg"
          alt="hamburger close"
          className="absolute right-8 top-7 z-30 md:hidden"
          onClick={triggerHam}
        />
      )}
      <div className="shades1 w-screen h-[20vh] absolute left-0 top-0"></div>
      <div
        className={`${
          ham === "open" ? "hidden" : "block"
        } shades2 absolute w-screen h-screen top-0 left-0 md:hidden`}
      ></div>
      <div className="w-[90vw] md:w-[80vw] m-auto flex justify-between relative z-10">
        <img src="/images/logo.svg" alt="logo" />
        <nav
          className={`${
            ham === "open" ? "hidden" : "flex"
          } text-black md:text-white absolute z-30 md:relative md:flex flex-col md:flex-row w-[90vw] md:w-fit bg-white md:bg-transparent py-6 md:py-0 top-32 md:top-0 pl-6 md:pl-0 gap-y-8 md:gap-y-0 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 rounded-lg font-medium`}
        >
          <a href="#" className="relative">
            About
          </a>
          <a href="#" className="relative">
            Discover
          </a>
          <a href="#">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

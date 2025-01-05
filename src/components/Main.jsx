import React, { useState } from "react";
import Button from "./Button";

const Main = () => {
  const [bookmarkOn, setBookmarkOn] = useState(false);

  const setBookmark = () => {
    bookmarkOn === false ? setBookmarkOn(true) : setBookmarkOn(false);
  };

  return (
    <main className="w-screen bg-slate-100">
      <div className="masterCraft w-[90vw] md:w-[60vw] lg:w-[50vw] m-auto relative pt-60">
        <div className="w-full bg-white absolute left-0 right-0 -top-14 rounded-lg pt-12 pb-8 px-4">
          <img
            src="/images/logo-mastercraft.svg"
            alt="mastercraft logo"
            className="absolute -top-7 right-0 left-0 m-auto"
          />
          <h1 className="text-center text-2xl font-bold">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-center mt-4 text-slate-500 mb-6">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="w-full flex justify-around">
            <Button text="Back this project" swapColor="swapColor" />
            <div
              className="md:bg-slate-100 md:flex md:gap-x-6 md:rounded-full md:items-center md:pr-8 cursor-pointer"
              onClick={setBookmark}
            >
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle
                    fill={`${bookmarkOn ? "hsl(176, 72%, 28%)" : "#2F2F2F"}`}
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    fill={`${bookmarkOn ? "rgb(255, 255, 255)" : "#B1B1B1"}`}
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <span
                className={`hidden md:inline font-bold ${
                  bookmarkOn ? "text-teal-600" : "text-slate-600"
                }`}
              >
                {bookmarkOn ? "Bookmarked" : "Bookmark"}
              </span>
            </div>
          </div>
        </div>
        <div className="range w-full bg-white md:px-4 py-6 md:pl-8">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-6 items-center">
            <div className="">
              <h2 className="text-center md:text-left">$89,914</h2>
              <span className="text-center md:text-left">of $100,000 backed</span>
            </div>
            <div className="">
              <h2 className="text-center md:text-left">5,007</h2>
              <span className="text-center md:text-left">total backers</span>
            </div>
            <div className="">
              <h2 className="text-center md:text-left">56</h2>
              <span className="text-center md:text-left">days left</span>
            </div>
          </div>
          <div className="w-10/12 h-[1.5vh] rounded-lg bg-slate-200 mt-6 m-auto md:ml-0 md:mr-0">
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </main>
  );
};

export default Main;

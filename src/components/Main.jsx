import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <main className="w-screen bg-slate-100">
      <div className="masterCraft w-[90vw] md:w-[60vw] lg:w-[50vw] m-auto relative pt-60">
        <div className="w-full bg-white absolute left-0 right-0 -top-14 rounded-lg pt-12 pb-8 px-4">
          <img src="/images/logo-mastercraft.svg" alt="mastercraft logo" className="absolute -top-7 right-0 left-0 m-auto"/>
          <h1 className="text-center text-2xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
          <p className="text-center mt-4 text-slate-500 mb-6">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="w-full flex justify-around">
            <Button text="Back this project" color="hsl(176, 50%, 47%)"/>
            <div className="md:bg-slate-100 md:flex md:gap-x-6 md:rounded-full md:items-center md:pr-8">
              <img src="/images/icon-bookmark.svg" alt="bookmark" />
              <span className="hidden md:inline font-bold text-slate-600">Bookmark</span>
            </div>
          </div>
        </div>
        <div className="range"></div>
      </div>
    </main>
  );
};

export default Main;

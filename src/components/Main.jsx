import React from "react";

const Main = () => {
  return (
    <main className="w-screen bg-slate-100">
      <div className="masterCraft w-[90vw] md:w-[80vw]">
        <div className="w-full">
          <img src="/images/logo-mastercraft.svg" alt="mastercraft logo" />
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="w-full">
            <button>Back this project</button>
            <div className="">
              <img src="/images/icon-bookmark.svg" alt="bookmark" />
              <span>Bookmark</span>
            </div>
          </div>
        </div>
        <div className="range"></div>
      </div>
    </main>
  );
};

export default Main;

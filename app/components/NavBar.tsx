import React from "react";
import { IoSunny } from "react-icons/io5";
import { IoMdLocate } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <>
      {" "}
      <nav className=" shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className=" h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
          <p className=" flex items-center justify-center gap-2">
            <h1 className=" text-gray-500 text-3xl">Current Weather</h1>
            <IoSunny className=" text-3xl mt-1 text-yellow-400" />{" "}
          </p>
          <section className=" flex gap-2 items-center">
            <IoMdLocate className=" text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
            <MdOutlineLocationOn className=" text-3xl" />
            <p className=" text-slate-900/80 text-sm"> Pakistan </p>
            <div>
              <SearchBox />
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

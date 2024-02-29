import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchInput = () => {
  return (
    <div className="w-full z-10">
      <div className="mx-auto flex  p-4   rounded-lg justify-center items-center max-w-6xl bg-white   border-2 ">
        <input
          type="text"
          className="w-[100%] outline-none text-lg rounded-lg"
          placeholder="Search..."
        />
        <AiOutlineSearch className="" size={24} />
      </div>
    </div>
  );
};

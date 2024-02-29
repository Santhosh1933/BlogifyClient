import React from "react";

export const Heading = () => {
  return (
    <div className="bg-white z-10">
      <div className="flex justify-between p-4 max-w-6xl mx-auto">
        <h1 className="head_text">Blogify</h1>
        <button className="px-4 py-2 rounded-lg bg-orange-500 text-white outline-none">
          Login / Register
        </button>
      </div>
    </div>
  );
};

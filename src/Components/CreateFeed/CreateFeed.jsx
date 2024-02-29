import React, { useState } from "react";
import { TextEditor } from "../TextEditor";
import { BreadCramps } from "../BreadCramps";

export const CreateFeed = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="w-full  ">
      <div className="max-w-6xl p-4 mx-auto ">
        <p className="py-10">
          <BreadCramps
            paths={[
              { name: "Home", path: "/" },
              { name: "Create-Post", path: "/create-post" },
            ]}
          />
        </p>
        <h1 className="text-2xl font-bold text-orange-600 pb-6">
          Create Magic 🪄
        </h1>
        <div className="flex gap-8 flex-col">
          <p className="text-xl capitalize sm:text-2xl w-full text-justify font-bold h-full w-full">
            {title}
          </p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-white focus:ring-2 ring-orange-200 w-full border-2 border-orange-700 px-4 py-3 outline-none"
            placeholder="Enter Title..."
          />
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

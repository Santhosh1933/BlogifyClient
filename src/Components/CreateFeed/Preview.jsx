import React, { useEffect, useState } from "react";
import { BreadCramps } from "../BreadCramps";

export const Preview = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(sessionStorage.getItem("post-title") || "No title");
    setContent(
      sessionStorage.getItem("post-content") || "No Content To Preview"
    );
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto p-4">
        <p className="py-10">
          <BreadCramps
            paths={[
              { name: "Home", path: "/" },
              { name: "Create-Post", path: "/create-post" },
              { name: "Preview", path: "/create-post/preview" },
            ]}
          />
        </p>
        <h1 className="text-2xl font-bold text-orange-600 pb-6">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
};

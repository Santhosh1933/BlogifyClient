import React, { useEffect, useState } from "react";
import { BreadCramps } from "../BreadCramps";
import { useLocation } from "react-router-dom";
import { Comments } from "./Comments";

export const IndividualFeed = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(sessionStorage.getItem("post-title") || "No title");
    setContent(
      sessionStorage.getItem("post-content") || "No Content To Preview"
    );
  }, []);

  const location = useLocation();

  return (
    <div>
      <div className="w-full">
        <div className="max-w-6xl mx-auto p-4">
          <p className="py-10">
            <BreadCramps
              paths={[
                { name: "Home", path: "/" },
                {
                  name: location.pathname.substring(1),
                  path: `${location.pathname}`,
                },
              ]}
            />
          </p>
          <h1 className="text-2xl font-bold text-orange-600 pb-6">{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <Comments />
        </div>
      </div>
    </div>
  );
};

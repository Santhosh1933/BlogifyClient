import React, { useEffect, useState } from "react";
import { TextEditor } from "../TextEditor";
import { BreadCramps } from "../BreadCramps";
import { ButtonGroup } from "./ButtonGroup";
import { Heading } from "../Home/Heading";
import { useNavigate } from "react-router-dom";
import { Decryption } from "../../config/EncryptionDecryption";
export const CreateFeed = () => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const [decryptedValue, setDecryptedValue] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    let decryptedToken = null;
    if (token) {
      decryptedToken = JSON.parse(Decryption(token));
      setDecryptedValue(decryptedToken);
    }
    if (!decryptedToken && !decryptedToken?.email) {
      navigate("/");
    }
    setTitle(sessionStorage.getItem("post-title") || "");
  }, []);

  useEffect(() => {
    if (title) {
      sessionStorage.setItem("post-title", title);
    }
  }, [title]);
  return (
    <div className="w-full  relative">
      <Heading />

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
        <ButtonGroup />
      </div>
    </div>
  );
};

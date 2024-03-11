import React, { useEffect, useState } from "react";
import { BreadCramps } from "../BreadCramps";
import { Heading } from "../Home/Heading";
import { useNavigate } from "react-router-dom";
import { Decryption } from "../../config/EncryptionDecryption";
import "../TextEditorStyle.css"
export const Preview = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    setTitle(sessionStorage.getItem("post-title") || "No title");
    setContent(
      sessionStorage.getItem("post-content") || "No Content To Preview"
    );
  }, []);

  return (
    <div className="w-full relative">
      <Heading/>
      <div className="max-w-6xl mx-auto p-4">
        <p className="py-10 ">
          <BreadCramps
            paths={[
              { name: "Home", path: "/" },
              { name: "Create-Post", path: "/create-post" },
              { name: "Preview", path: "/create-post/preview" },
            ]}
          />
        </p>
        <h1 className="text-2xl font-bold text-orange-600 pb-6">{title}</h1>
        <div className="" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

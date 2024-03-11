import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditorStyle.css";
import { Heading } from "./Home/Heading";

export const TextEditor = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(sessionStorage.getItem("post-content") || "");
  }, []);

  useEffect(() => {
    if (text) {
      sessionStorage.setItem("post-content", text);
    }
  }, [text]);


  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block", "link", "image"],
    [{ header: 1 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="w-full relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="">
          <ReactQuill
            modules={modules}
            theme="snow"
            value={text}
            onChange={setText}
          />
        </div>
      </div>
    </div>
  );
};

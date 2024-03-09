import React from "react";
import { AiOutlineEye, AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const ButtonGroup = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center sm:justify-end py-8">
      <div className="flex gap-4">
        <button className="btn_group_post">
          Post <AiOutlineUpload size={20} />
        </button>
        <button
          onClick={() => navigate("/create-post/preview")}
          className="btn_group_preview"
        >
          Preview <AiOutlineEye size={20} />
        </button>
      </div>
    </div>
  );
};

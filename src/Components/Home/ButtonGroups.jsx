import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonGroups = () => {
  const navigate = useNavigate();

  return (
    <div className="w-fit mx-auto flex gap-4">
      <button
        onClick={() => navigate("/create-post")}
        className="btn_group_create_post"
      >
        Create Post
      </button>
      <button className="btn_group_my_post">My Post</button>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const BreadCramps = ({ paths }) => {
  const navigate = useNavigate();
  return (
    <div>
      {paths?.map((path) => {
        return (
          <span
            onClick={() => navigate(path.path)}
            className="text-blue-500 cursor-pointer font-medium hover:text-blue-800"
          >
            {path.name} /{" "}
          </span>
        );
      })}
    </div>
  );
};

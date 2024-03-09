import React from "react";

export const CommentCard = ({ comment }) => {
  return (
    <div className="flex flex-col bg-slate-100 p-4 gap-2 rounded-lg w-full">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex gap-4 items-center ">
          <div className="w-10 h-10 border-2 rounded-full overflow-hidden">
            <img
              src={comment.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className=" truncate font-semibold text-blue-700">
            {comment.username}
          </p>
        </div>
        <p className="text-gray-600">{comment.dateOfComment}</p>
      </div>
      <div>
        <p className="">{comment.comment}</p>
      </div>
    </div>
  );
};

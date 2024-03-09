import React from "react";
import {
  AiOutlineCopy,
  AiOutlineSave,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const FeedCard = ({
  id,
  username="santhosh s",
  image = "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  title="This is a sample post Title",
  commentCount=5,
}) => {
  const Navigate = useNavigate();
  const route = "Hello-world";
  return (
    <div className="feed_card">
      <div onClick={() => Navigate(`/${route}`)}>
        <div className="flex justify-start items-center gap-2">
          <div className="w-10 h-10 border-2 rounded-full overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className=" truncate font-semibold text-blue-700">{username}</p>
        </div>
        <div>
          <p>{title}</p>
          <p className="text-xs text-gray-400 font-medium">{commentCount} comments</p>
        </div>
      </div>
      <div className="flex  cursor-pointer justify-between">
        <div className="flex gap-4">
          <AiOutlineSave className="text-lg sm:text-xl" />
          <AiOutlineShareAlt className="text-lg sm:text-xl" />
        </div>
        <div>
          <AiOutlineCopy className="text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

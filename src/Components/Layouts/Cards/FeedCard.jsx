import React from "react";
import {
  AiOutlineCopy,
  AiOutlineSave,
  AiOutlineShareAlt,
} from "react-icons/ai";
export const FeedCard = () => {
  return (
    <div className="feed_card">
      <div className="flex justify-start items-center gap-2">
        <div className="w-10 h-10 border-2 rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className=" truncate font-semibold text-blue-700">santhosh s</p>
      </div>
      <div>
        <p>This is a sample post Title and Lorem ipsum dolor sit amet..</p>
        <p className="text-xs text-gray-400 font-medium">5 comments</p>
      </div>
      <div className="flex cursor-pointer justify-between">
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

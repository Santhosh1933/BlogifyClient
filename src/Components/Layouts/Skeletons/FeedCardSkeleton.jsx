import React from "react";

export const FeedCardSkeleton = () => {
  return (
    <div>
      <div className="feed_card">
        <div className="flex justify-start items-center gap-2">
          <div className="w-10 h-10 border-2 rounded-full bg-gradient-to-r animate-pulse from-gray-500 to-gray-400 overflow-hidden"></div>
          <p className=" truncate font-semibold bg-gradient-to-r animate-pulse py-2 w-2/4 from-gray-300 to-gray-400"></p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="bg-gradient-to-r animate-pulse  w-full from-gray-400 to-gray-300 text-transparent select-none">
            santhosh
          </p>
          <p className="bg-gradient-to-r animate-pulse  w-full from-gray-300 to-gray-400 text-transparent select-none">
            santhosh
          </p>
        </div>
        <div className="flex cursor-pointer justify-between">
          <div className="flex gap-4">
            <div className="w-7 h-7 border-2 rounded-full bg-gradient-to-r animate-pulse from-gray-500 to-gray-400 overflow-hidden"></div>
            <div className="w-7 h-7 border-2 rounded-full bg-gradient-to-r animate-pulse from-gray-400 to-gray-500 overflow-hidden"></div>
          </div>
          <div className="w-7 h-7 border-2 rounded-full bg-gradient-to-r animate-pulse from-gray-500 to-gray-400 overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

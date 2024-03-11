import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export const FeedCardSkeleton = () => {
  return (
    <div>
      <div className="feed_card">
        <div className="flex justify-start items-center gap-4">
          <SkeletonCircle size="10" className=""/>
          <Skeleton className="w-3/4" >
            <p >Loading...</p>
          </Skeleton>
        </div>
        <SkeletonText mt='1' noOfLines={2} spacing='2' skeletonHeight='3'/>
        <div className="mt-3">
        <Skeleton>
          <p>Loading....</p>
        </Skeleton>
        </div>
      </div>
    </div>
  );
};

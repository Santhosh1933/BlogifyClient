import React from "react";
import { Heading } from "./Heading";
import { FeedLayout } from "../Layouts/FeedLayout";
import { FeedCard } from "../Layouts/Cards/FeedCard";
import { ButtonGroups } from "./ButtonGroups";
import { SearchInput } from "./SearchInput";
import { FeedCardSkeleton } from "../Layouts/Skeletons/FeedCardSkeleton";

export const Feed = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <Heading />
      <ButtonGroups />
      <SearchInput />
      <FeedLayout>
        <FeedCardSkeleton />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedLayout>
    </div>
  );
};

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
        <FeedCard
          username="santhosh s"
          image="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          title="This is a sample post Title"
          commentCount={5}
        />

        <FeedCard
          username="priya s"
          image="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          title="This is a sample post Title gdbfhbjnkm,"
          commentCount={9}
        />

        <FeedCard
          username="John Doe"
          image="https://example.com/johndoe.jpg"
          title="Amazing Day at the Beach"
          commentCount={3}
        />

        <FeedCard
          username="Alice Johnson"
          image="https://example.com/alicejohnson.jpg"
          title="Exploring New Horizons"
          commentCount={12}
        />

        <FeedCard
          username="Bob Brown"
          image="https://example.com/bobbrown.jpg"
          title="Coding Adventures"
          commentCount={7}
        />

        <FeedCard
          username="Eva Davis"
          image="https://example.com/evadavis.jpg"
          title="Sunset Reflections"
          commentCount={8}
        />

        <FeedCard
          username="Daniel Lee"
          image="https://example.com/daniellee.jpg"
          title="Weekend Vibes"
          commentCount={4}
        />

        <FeedCard
          username="Sophia Smith"
          image="https://example.com/sophiasmith.jpg"
          title="Coffee and Chill"
          commentCount={6}
        />

        <FeedCard
          username="Liam Wilson"
          image="https://example.com/liamwilson.jpg"
          title="Nature Walks"
          commentCount={10}
        />

        <FeedCard
          username="Olivia Martin"
          image="https://example.com/oliviamartin.jpg"
          title="In the City"
          commentCount={15}
        />
      </FeedLayout>
    </div>
  );
};

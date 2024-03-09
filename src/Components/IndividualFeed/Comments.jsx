import React from "react";
import { CommentCard } from "../Layouts/Cards/CommentCard";

export const Comments = ({
  Comments = [
    {
      username: "santhosh_s",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      comment: "Its Very useful bro",
      dateOfComment: "19/03/2003"
    },
    {
      username: "santhosh_s",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      comment: "Its Very useful bro",
      dateOfComment: "19/03/2003",
    },
    {
      username: "santhosh_s",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      comment: "Its Very useful bro",
      dateOfComment: "19/03/2003",
    },
    {
      username: "santhosh_s",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      comment: "Its Very useful bro",
      dateOfComment: "19/03/2003",
    },
  ],
}) => {
  return (
    <div className="">
      <h3 className="font-semibold text-gray-700 py-8">Comments</h3>
      <input
        type="text"
        className="w-[100%] outline-none border p-3 bg-slate-100  rounded-lg"
        placeholder="Comment..."
      />
      <div className="flex flex-col gap-4 py-8">
        {Comments.map((data, i) => (
          <CommentCard key={i} comment={data} />
        ))}
      </div>
    </div>
  );
};

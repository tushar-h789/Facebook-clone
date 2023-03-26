import React from "react";
import { BiDotsHorizontalRounded, BiCommentDetail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import Underline from "./Underline";

const MiddleStatusPart = () => {
  return (
    <div className="bg-white w-[573px] h-[686px] mt-4 rounded-lg drop-shadow-lg mb-10">
      <div className="px-4">
        <div className="flex items-center gap-4 mt-9">
          <img src="assets/pro.png" />
          <h2 className="font-nun font-bold text-base ">A L K Alex Jhon</h2>
          <div className="flex items-center ml-[270px] gap-4">
            <BiDotsHorizontalRounded />
            <RxCross2 />
          </div>
        </div>
        <p className="text-start mt-2">
          Love encompasses a range of strong and positive emotional and mental
          states, from the most sublime virtue or good habit, the deepest
          interpersonal affection.
        </p>
      </div>
      <div className=" p-4 ">
        <img className="rounded-xl" src="assets/post.png" />
      </div>
      <div>
        <Underline className="underline" />
      </div>
      <div className="flex items-center justify-around text-3xl mt-4">
        <div className="flex items-center gap-3">
        <AiFillLike />
        <h3>Like</h3>
        </div>
        <div className="flex items-center gap-3">
        <BiCommentDetail />
        <h3>Comments</h3>
        </div>
        
      </div>
    </div>
  );
};

export default MiddleStatusPart;

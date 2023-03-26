import React from "react";
import FButton from "./FButton";
import SubHeading from "./SubHeading";
import Underline from "./Underline";

const PeopleFriendRequest = (props) => {
  return (
    <>
      <div className="flex items-center gap-4 mt-4">
        <img src="assets/pro.png"/>
        <h3 className="font-nun font-bold text-base">
          <p className="font-nun font-bold text-lg text-black">{props.title}</p>
          <div className="flex gap-3">
            <button className="bg-primary py-1 px-3 rounded-lg font-nun font-semibold text-base">{props.accept}</button>
            <button className="bg-[#E4E6EB] py-1 px-3 rounded-lg">
              {props.delete}
            </button>
          </div>
        </h3>
      </div>
      
    </>
  );
};

export default PeopleFriendRequest;

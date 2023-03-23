import React from "react";
import FButton from "./FButton";
import SubHeading from "./SubHeading";
import Underline from "./Underline";

const PeopleFriendRequest = () => {
  return (
    <>
      <div className="flex items-center gap-4 mt-4">
        <h1 className="bg-[#D9D9D9] rounded-full h-10 w-10"></h1>
        <h3 className="font-nun font-bold text-base">
          <SubHeading title="Tushar Imran" />
          <div className="flex gap-3">
            <button className="bg-primary py-1 px-3 rounded-lg">Confirm</button>
            <button className="bg-[#E4E6EB] py-1 px-3 rounded-lg">
              Delete
            </button>
          </div>
        </h3>
      </div>
      <Underline />
    </>
  );
};

export default PeopleFriendRequest;

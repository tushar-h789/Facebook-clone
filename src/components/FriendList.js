import React from "react";
import { NavLink } from "react-router-dom";
import PeopleFriendRequest from "./PeopleFriendRequest";

const FriendList = () => {
  return (
    <div>
      
      <div className="w-[240px] pt-4 ">
        <input
          placeholder="Search"
          className="py-2 rounded-full relative pl-4"
        />
      </div>
      
      <div className="bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl p-2">
      <PeopleFriendRequest title="Imran" accept="Unfriend" delete="Block"/>
      <PeopleFriendRequest title="Tushar Imran" accept="Unfriend" delete="Block"/>
      <PeopleFriendRequest title="Alex Jhon" accept="Unfriend" delete="Block"/>
      <PeopleFriendRequest title="Jhon Abraham" accept="Unfriend" delete="Block"/>
      <PeopleFriendRequest title="Tommi" accept="Unfriend" delete="Block"/>
      </div>
    </div>
  );
};

export default FriendList;

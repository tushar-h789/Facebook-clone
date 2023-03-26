import React from "react";
import PeopleFriendRequest from "./PeopleFriendRequest";

const GroupList = () => {
  return (
    <div>
      <div>
        <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
          Group List
        </button>



      </div>
      <input
          placeholder="Search Group"
          className="py-2 rounded-full relative pl-4 mt-3"
        />
      <div>
        <PeopleFriendRequest title="Mern 2202" accept="Join" delete="Remove" />
        <PeopleFriendRequest title="Facebook" accept="Join" delete="Remove" />
        <PeopleFriendRequest title="Instagram" accept="Join" delete="Remove" />
        <PeopleFriendRequest title="Tech" accept="Join" delete="Remove" />
        <PeopleFriendRequest title="Ollyo" accept="Join" delete="Remove" />
      </div>
    </div>
  );
};

export default GroupList;

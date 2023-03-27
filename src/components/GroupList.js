import React from "react";
import PeopleFriendRequest from "./PeopleFriendRequest";

const GroupList = () => {
  return (
    <div>
      

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

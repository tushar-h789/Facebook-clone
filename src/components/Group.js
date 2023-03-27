import React from "react";
import { Link, Outlet } from "react-router-dom";
import GroupList from "./GroupList";
import MyGroup from "./MyGroup";
import PeopleFriendRequest from "./PeopleFriendRequest";

const Group = () => {
  return (
    <div>
      <div className="flex justify-around mt-4">
        <div>
          <Link to="mygroup">
            <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
              My Group
            </button>
          </Link>
        </div>

        <div>
          <Link to="grouplist">
            <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
              Group List
            </button>
          </Link>
        </div>
      </div>

      
      <Outlet />
    </div>
  );
};

export default Group;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import MemberList from "./MemberList";
import MemberRequest from "./MemberRequest";
import PeopleFriendRequest from "./PeopleFriendRequest";

const GroupInfo = () => {
  return (
    <div>
      <div className="flex justify-around mt-10">
        <div>
          <Link to="memberlist">
            <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
              Member List
            </button>
          </Link>
        </div>
        

        <div>
          <Link to="memberrequest">
        <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
        Member Request
        </button>
        </Link>
      </div>

      </div>

      <Outlet/>
    </div>
  );
};

export default GroupInfo;

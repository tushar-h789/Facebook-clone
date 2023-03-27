import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import FriendList from "./FriendList";
import FriendRequest from "./FriendRequest";
import Suggestions from "./Suggestions";

const Friend = () => {
  return (
    <>
      <div className=" mt-4 flex">
        <div className="">
          <NavLink to="friendlist">
            <div>
              <button className="py-4 px-10 bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl">
                Friends
              </button>
            </div>
          </NavLink>
        </div>

        <div className="">
          <NavLink to="suggestions">
            <div>
              <button className="py-4 px-10 bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl">
                Suggestions
              </button>
            </div>
          </NavLink>
        </div>

        <div className="">
          <NavLink to="friendrequest">
            <div>
              <button className="py-4 px-10 bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl">
                Friend Request
              </button>
            </div>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Friend;

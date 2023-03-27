import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import People from "./People";
import SubHeading from "./SubHeading";
import { NavLink } from "react-router-dom";

const HomeLeftPart = () => {
  return (
    <div className="ml-8">
      <People />
        <NavLink to="friends/friendlist">
      <div className="flex items-center gap-4 mt-8">
        <FaUserFriends className="text-[40px]" />
        <SubHeading title="Friends" />
      </div>
        </NavLink>

      <NavLink to="groups/mygroup">
      <div className="flex items-center gap-4 mt-8">
        <MdGroups className="text-[40px]" />
        <SubHeading title="My Group" />
      </div>
      </NavLink>

    <NavLink to="block">
      <div className="flex items-center gap-4 mt-8">
        <ImCross className="text-[40px]" />
        <SubHeading title="Block List" />
      </div>
      </NavLink>

      <NavLink to="https://www.youtube.com/">
      <div className="flex items-center gap-4 mt-8">
        <MdOndemandVideo className="text-[40px]" />
        <SubHeading title="Watch" />
      </div>
      </NavLink>

      <NavLink to="settings">
      <div className="flex items-center gap-4 mt-8">
        <AiFillSetting className="text-[40px]" />
        <SubHeading title="Settings" />
      </div>
      </NavLink>
      
      <div className="flex items-center gap-4 mt-20">
        <CiLogout className="text-[40px]" />
        <SubHeading title="Logout" />
      </div>
    </div>
  );
};

export default HomeLeftPart;

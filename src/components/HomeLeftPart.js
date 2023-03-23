import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import People from "./People";
import SubHeading from "./SubHeading";

const HomeLeftPart = () => {
  return (
    <div className="ml-8">
      <People />
      <div className="flex items-center gap-4 mt-8">
        <FaUserFriends className="text-[40px]" />
        <SubHeading title="Friends" />
      </div>

      <div className="flex items-center gap-4 mt-8">
        <MdGroups className="text-[40px]" />
        <SubHeading title="My Group" />
      </div>

      <div className="flex items-center gap-4 mt-8">
        <ImCross className="text-[40px]" />
        <SubHeading title="Block List" />
      </div>

      <div className="flex items-center gap-4 mt-8">
        <AiFillSetting className="text-[40px]" />
        <SubHeading title="Settings" />
      </div>
      
      <div className="flex items-center gap-4 mt-20">
        <CiLogout className="text-[40px]" />
        <SubHeading title="Logout" />
      </div>
    </div>
  );
};

export default HomeLeftPart;

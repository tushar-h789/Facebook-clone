import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaFacebook, FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdGroups, MdNotificationsActive } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Messege from "../pages/Messege";
import Home from "./Home";

const RootLayout = () => {
  return (
    <>
      <div className="flex items-center bg-orange-400 justify-between">
        <div className="flex">
          <FaFacebook className="text-[50px] text-primary rounded-full " />
          <div className=" ml-3 ">
            {/* <BiSearchAlt2 className=" text-3xl absolute z-10 left-3 mt-3 text-[#65676B]" /> */}
            <input
              className="bg-white rounded-full w-[280px] py-3 searchBox"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        <div className="flex text-[40px] gap-20 items-center justify-center">
          <AiFillHome />
          <FaUserFriends />
          <MdNotificationsActive />
          <MdGroups />
          <FaFacebookMessenger />
        </div>

        <div className="flex text-[40px] gap-3 justify-center">
          <BsGrid3X3GapFill />
          <FaFacebookMessenger />
          <MdNotificationsActive />
          <CgProfile />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;

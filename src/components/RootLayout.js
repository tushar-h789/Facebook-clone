import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { FaFacebook, FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdGroups, MdNotificationsActive } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import HomeRightPart from "./HomeRightPart";
import HomeLeftPart from "./HomeLeftPart";
import { NavLink } from "react-router-dom";
import FriendList from "./FriendList";

const RootLayout = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        className="flex items-center bg-white drop-shadow-xl  py-2"
      >
        <Grid item xs>
          <div className="flex">
            <FaFacebook className="text-[50px] text-primary rounded-full " />
            <div className=" ml-3 ">
              <input
                className="bg-white rounded-full w-[280px] py-3 searchBox"
                placeholder="Search Facebook"
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="flex text-[40px] gap-20 items-center ">
            <NavLink to="/facebook"><AiFillHome /></NavLink>
            <NavLink to="friends"><FaUserFriends /></NavLink>
            <NavLink to="notification"><MdNotificationsActive /></NavLink>
            <NavLink to="groups"><MdGroups /></NavLink>
            <NavLink to="messege"><FaFacebookMessenger /></NavLink>
          </div>
        </Grid>

        <Grid item xs>
          <div className="flex text-[40px] gap-3 justify-center">
            <BsGrid3X3GapFill />
            <NavLink to="messege"><FaFacebookMessenger /></NavLink>
            <NavLink to="notification"><MdNotificationsActive /></NavLink>
            <CgProfile />
          </div>
        </Grid>
      </Grid>

      {/* <div className="flex justify-between">
        <HomeLeftPart />
        <HomeRightPart />
      </div> */}
      <Outlet />

    </>
  );
};

export default RootLayout;

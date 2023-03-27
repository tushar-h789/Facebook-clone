import React from "react";
import PeopleFriendRequest from "./PeopleFriendRequest";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GroupInfo from "./GroupInfo";
import { Link, Outlet } from "react-router-dom";

const MyGroup = () => {
  return (
    <div>

      <input
          placeholder="Search Group"
          className="py-2 rounded-full relative pl-4 mt-3"
        />
      <div>
        <Link to="groupinfo">
        <PeopleFriendRequest title="Mern 2202" accept="Info" delete="Delete" />
        </Link>
      </div>
      
      <Outlet/>



      
    </div>
  );
};

export default MyGroup;

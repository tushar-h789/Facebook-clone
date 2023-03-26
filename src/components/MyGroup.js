import React from "react";
import PeopleFriendRequest from "./PeopleFriendRequest";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GroupInfo from "./GroupInfo";

const MyGroup = () => {
  return (
    <div>
      <div>
        <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
          My Group
        </button>
      </div>
      <input
          placeholder="Search Group"
          className="py-2 rounded-full relative pl-4 mt-3"
        />
      <div>
        <PeopleFriendRequest title="Mern 2202" accept="Info" delete="Delete" />
      </div>

      <GroupInfo/>

      
    </div>
  );
};

export default MyGroup;

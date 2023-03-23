import React from "react";
import Contacts from "./Contacts";
import CreateGroup from "./CreateGroup";
import RightSiteFriendRequest from "./RightSiteFriendRequest";
import YourGroup from "./YourGroup";

const HomeRightPart = () => {
  return (
    <div>
      <YourGroup />
      <CreateGroup />
      <RightSiteFriendRequest />
      <Contacts />
    </div>
  );
};

export default HomeRightPart;

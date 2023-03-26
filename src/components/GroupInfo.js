import React from "react";
import MemberList from "./MemberList";
import MemberRequest from "./MemberRequest";
import PeopleFriendRequest from "./PeopleFriendRequest";

const GroupInfo = () => {
  return (
    <div>
      <div className="flex justify-around mt-10">
        <MemberRequest />

        <MemberList/>
      </div>


    </div>
  );
};

export default GroupInfo;

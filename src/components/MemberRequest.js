import React from 'react'
import PeopleFriendRequest from './PeopleFriendRequest'

const MemberRequest = () => {
  return (
    <div>
        <div>
        <button className="font-nun font-bold text-lg py-4 px-10 bg-[#D9D9D9] text-black rounded-xl shadow-xl">
        Member Request
        </button>
      </div>

      <div>
      <input
          placeholder="Search Group"
          className="py-2 rounded-full relative pl-4 mt-3"
        />
      </div>

      <div>
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
      </div>
      
    </div>
  )
}

export default MemberRequest
import React from 'react'
import PeopleFriendRequest from './PeopleFriendRequest'

const FriendRequest = () => {
  return (
    <div>
      
      <div className="w-[240px] pt-4 ">
        <input
          placeholder="Search"
          className="py-2 rounded-full relative pl-4"
        />
      </div>
      
      <div className="bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl p-2">
      <PeopleFriendRequest title="Imran" accept="Confirm" delete="Delete"/>
      <PeopleFriendRequest title="Tushar Imran" accept="Confirm" delete="Delete"/>
      <PeopleFriendRequest title="Alex Jhon" accept="Confirm" delete="Delete"/>
      <PeopleFriendRequest title="Jhon Abraham" accept="Confirm" delete="Delete"/>
      </div>
    </div>
  )
}

export default FriendRequest
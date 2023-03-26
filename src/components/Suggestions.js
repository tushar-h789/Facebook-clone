import React from 'react'
import PeopleFriendRequest from './PeopleFriendRequest'

const Suggestions = () => {
  return (
    <div>
      <div>
        <button className="py-4 px-10 bg-[#D9D9D9] text-[#4F4646] rounded-xl shadow-xl">
          Suggestions
        </button>
      </div>
      <div className="w-[240px] pt-4 ">
        <input
          placeholder="Search"
          className="py-2 rounded-full relative pl-4"
        />
      </div>
      
      <div>
      <PeopleFriendRequest title="Tushar" accept="Add " delete="Remove"/>
      <PeopleFriendRequest title="Tushar Imran" accept="Add" delete="Remove"/>
      <PeopleFriendRequest title="Alex Jhon" accept="Add" delete="Remove"/>
      <PeopleFriendRequest title="Jhon Abraham" accept="Add" delete="Remove"/>
      <PeopleFriendRequest title="Tommi" accept="Add" delete="Remove"/>
      </div>
    </div>
  )
}

export default Suggestions
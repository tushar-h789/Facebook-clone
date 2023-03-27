import React from 'react'
import PeopleFriendRequest from './PeopleFriendRequest'

const MemberRequest = () => {
  return (
    <div>
        

      <div>
      <input
          placeholder="Search Group"
          className="py-2 rounded-full relative pl-4 mt-3"
        />
      </div>

      <div>
        <PeopleFriendRequest title="Instagram" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Twiter" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
        <PeopleFriendRequest title="Facebook" accept="Accept" delete="Delete" />
      </div>
      
    </div>
  )
}

export default MemberRequest
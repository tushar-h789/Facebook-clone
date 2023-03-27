import React from 'react'
import PeopleFriendRequest from './PeopleFriendRequest'

const MemberList = () => {
  return (
    <div className='ml-4'>
    

  <div>
  <input
      placeholder="Search Group"
      className="py-2 rounded-full relative pl-4 mt-3"
    />
  </div>

  <div>
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
    <PeopleFriendRequest title="Facebook" accept="Block" delete="Delete" />
  </div>
  
</div>
  )
}

export default MemberList
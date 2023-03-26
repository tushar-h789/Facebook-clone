import React from 'react'
import GroupList from './GroupList'
import MyGroup from './MyGroup'
import PeopleFriendRequest from './PeopleFriendRequest'

const Group = () => {
  return (
    <div>
        <div className='flex justify-around mt-4'>
        {/* <GroupList/> */}
        <MyGroup/>
    </div>
    

    </div>
  )
}

export default Group
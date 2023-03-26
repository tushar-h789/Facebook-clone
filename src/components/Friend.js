import React from 'react'
import FriendList from './FriendList'
import FriendRequest from './FriendRequest'
import Suggestions from './Suggestions'

const Friend = () => {
  return (
    <div className='flex mt-4'>
        <div className='w-[33%]'>
            <FriendList/>
        </div>
        <div className='w-[33%]'>
            <Suggestions/>
        </div>
        <div className='w-[33%]'>
            <FriendRequest/>
        </div>
    </div>
  )
}

export default Friend
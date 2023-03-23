import React from 'react'
import Heading from './Heading'
import PeopleFriendRequest from './PeopleFriendRequest'

const RightSiteFriendRequest = () => {
  return (
    <>
        <div className='flex justify-between mt-3'>
        <div>
            <Heading title="Friend Request"/>
        </div>
            <a href='#' className='mr-8 text-primary'>See All</a>
    </div>

    <PeopleFriendRequest/>
    </>
  )
}

export default RightSiteFriendRequest
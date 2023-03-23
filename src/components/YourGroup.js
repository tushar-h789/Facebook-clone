import React from 'react'
import {HiDotsHorizontal} from "react-icons/hi"
import Heading from './Heading'
import People from './People'

const YourGroup = () => {
  return (

   <>
     <div className='flex items-center justify-between mr-8'>
        <h1 className='mt-4'>
            <Heading title="Your Group"/>
        </h1>
        <HiDotsHorizontal/>
        </div>
    
    {/* ekhan theke props akare data pass korte partechina. ami ekhan theke nijer iccha moto data pathate cacchi*/}
        <People />
        <People />
        <People />
   </>
  )
}

export default YourGroup
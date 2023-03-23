import React from 'react'
import Heading from './Heading'
import {HiDotsHorizontal} from "react-icons/hi"
import People from './People'

const Contacts = () => {
  return (
    <>
        <div className='flex items-center justify-between mr-8'>
        <h1 className='mt-4'>
            <Heading title="Contacts"/>
        </h1>
        <HiDotsHorizontal/>
        </div>
    
    {/* ekhan theke props akare data pass korte partechina. ami ekhan theke nijer iccha moto data pathate cacchi*/}
        <People />
        <People />
        <People />
        <People />
    </>
  )
}

export default Contacts
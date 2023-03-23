import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs"
import Heading from './Heading'
import SubHeading from './SubHeading'
import Underline from './Underline'

const CreateGroup = () => {
  return (
    <>
        <div className='flex items-center gap-5 mt-5 '>
        <BsFillPlusCircleFill className='text-xl'/>
        <h3>
            <Heading title="Create Group"/>
        </h3>
    </div>
        <Underline/>
    </>
  )
}

export default CreateGroup
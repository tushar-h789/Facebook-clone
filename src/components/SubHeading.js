import React from 'react'

const SubHeading = (props) => {
  return (
    props.as == undefined
    ?
    <p className='font-nun font-bold text-base'>{props.title}</p>
    :
    <props.as className='font-nun text-normal text-xl flex justify-center mt-6'>Free register and you can enjoy it</props.as>
  )
}

export default SubHeading
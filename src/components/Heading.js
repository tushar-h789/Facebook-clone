import React from 'react'

const Heading = (props) => {
  return (
    props.as == undefined
    ?
    <h1 className='font-nun font-bold text-xl '>{props.title}</h1>
    :
    <props.as className='font-nun text-4xl font-bold flex justify-center mt-8'>{props.title}</props.as>
  )
}

export default Heading
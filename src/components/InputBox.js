import React from 'react'
import TextField from '@mui/material/TextField';

const InputBox = ({label, variant, type, className, textChange, name}) => {
  return (
    <TextField className={className} name={name} onChange={textChange} label={label} variant={variant} type={type}/>
  )
}

export default InputBox
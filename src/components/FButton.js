import React from 'react'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';



const FButton = (props) => {
  return (
    <props.bname variant="contained" onClick={props.click} disableRipple>
        {props.title}
      </props.bname>
  )
}

export default FButton
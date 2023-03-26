import React from 'react'
import { Grid } from '@mui/material'
import HomeLeftPart from '../components/HomeLeftPart'
import HomeRightPart from '../components/HomeRightPart'
import Group from '../components/Group'

const Groups = () => {
  return (
    <Grid container spacing={3} className="bg-[#F0F2F5]">
        <Grid item xs>
          <HomeLeftPart />
        </Grid>

        <Grid item xs={6}>
          <Group/>
        </Grid>

        <Grid item xs>
          <HomeRightPart />
        </Grid>
        
      </Grid>
  )
}

export default Groups
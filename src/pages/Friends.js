import React from 'react'
import Grid from '@mui/material/Grid';
import HomeLeftPart from '../components/HomeLeftPart';
import HomeRightPart from '../components/HomeRightPart';
import Friend from '../components/Friend';


const Friends = () => {
  return (
    <Grid container spacing={3} className="bg-[#F0F2F5]">
        <Grid item xs>
          <HomeLeftPart />
        </Grid>

        <Grid item xs={6}>
          <Friend/>
        </Grid>

        <Grid item xs>
          <HomeRightPart />
        </Grid>
        
      </Grid>
  )
}

export default Friends
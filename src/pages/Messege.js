import React from "react";
import Grid from "@mui/material/Grid";

const Messege = () => {
  return (
    <>
    <Grid container spacing={3}>
  <Grid item xs>
    <h1>Messege</h1>
  </Grid>
  <Grid item xs={6}>
    <h1>xs=6</h1>
  </Grid>
  <Grid item xs>
    <h1>xs</h1>
  </Grid>
</Grid>
    </>
  );
};

export default Messege;

import React, { useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "../slices/userSlice";
import Grid from "@mui/material/Grid";
import HomeRightPart from "./HomeRightPart";
import HomeLeftPart from "./HomeLeftPart";
import HomeMiddlePart from "./HomeMiddlePart";

const Home = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let data = useSelector((state) => state);

  console.log(data.userData.userInfo);

  useEffect(() => {
    if (!data.userData.userInfo) {
      console.log("ki re");
      navigate("/login");
    }
  }, []);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //     dispatch(activeUser(user))
  //   }
  // });

  let handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userInfo");
      dispatch(activeUser(null));
      navigate("/login");
    });
  };

  return (
    <>
      <Grid container spacing={3}>
  <Grid item xs >
    <div>
      <HomeLeftPart/>
    </div>
  </Grid>
  <Grid item xs={6}>
    <HomeMiddlePart/>
  </Grid>
  <Grid item xs >
    <div>
      <HomeRightPart/>
    </div>
  </Grid>
</Grid>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </>
  );
};

export default Home;

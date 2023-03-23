import { Container } from "@mui/system";
import React, { useState } from "react";
import FButton from "../components/FButton";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AuthenticationLink from "../components/AuthenticationLink";
import Images from "../components/Images";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { ProgressBar } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { activeUser } from "../slices/userSlice";

const Commonbutton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontFamily: ["Nunito", "sans-serif"],
  fontSize: 20.64,
  fontWeight: 600,
  padding: "19px 12px",
  border: "1px solid",
  borderRadius: "86px",
  lineHeight: 1.5,
  backgroundColor: "primary",
  borderColor: "primary",
  width: "368px",
  marginTop: "40px",

  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Login = () => {
  const auth = getAuth();
  let nevigate = useNavigate();
  let dispatch = useDispatch();
  const Googleprovider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const Fbprovider = new FacebookAuthProvider();

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({
    email: "",
    password: "",
  });

  let [show, setShow] = useState();
  let [loader, setLoader] = useState(false);

  let handleForm = (e) => {
    let { name, value } = e.target;

    let capi = /[A-Z]/;
    let small = /[a-z]/;
    let number = /[0-9]/;

    if (name === "password") {
      console.log(value);
      if (!capi.test(value)) {
        setError({ ...error, password: "One Capital Letter Requard" });
        return;
      }
      if (!small.test(value)) {
        setError({ ...error, password: "One Small Letter Requard" });
        return;
      }
      if (!number.test(value)) {
        setError({ ...error, password: "One Number Requard" });
        return;
      }
      if (value.length < 8) {
        setError({ ...error, password: "Password length atleast 8" });
        return;
      }
    }

    setFormData({ ...formData, [name]: value });

    setError({ ...error, [name]: "" });
  };

  let handleClick = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        dispatch(activeUser(userCredential.user));
        localStorage.setItem("userInfo", JSON.stringify(userCredential.user))
        setLoader(true);
        if (userCredential.user.emailVerified) {
          nevigate("/facebook");
        } else {
          toast("Please first verify your mail.");
          setLoader(false);
        }

        // setTimeout(()=>{
        //   toast("Login Successfully !")
        //   nevigate("/home")
        // },2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  let handleGoogle = () => {
    signInWithPopup(auth, Googleprovider).then((result) => {
      console.log("google done");
    });
  };

  let handleGithub = () => {
    signInWithPopup(auth, GithubProvider).then((result) => {
      console.log("Github done");
    });
  };

  let handleFb = () => {
    signInWithPopup(auth, Fbprovider).then((result) => {
      console.log("Github done");
    });
  };

  return (
    <Container>
      <Header>
        <Heading as="h2" title="Login to your account!" />
      </Header>
      <div className="flex flex-col items-center my-5 ">
        <div className="flex">
          <div onClick={handleFb}>
            <Images
              className="logo-img cursor-pointer"
              imgsrc="assets/fb.png"
            />
          </div>
          <div onClick={handleGoogle}>
            <Images
              className="logo-img cursor-pointer"
              imgsrc="assets/google.png"
            />
          </div>
          <div onClick={handleGithub}>
            <Images
              className="logo-img cursor-pointer"
              imgsrc="assets/github.png"
            />
          </div>
        </div>
        <InputBox
          className="inputbox"
          label="Email"
          type="text"
          variant="outlined"
          textChange={handleForm}
          name="email"
        />
        <InputBox
          className="inputbox"
          label="Password"
          type={show ? "text" : "password"}
          variant="outlined"
          textChange={handleForm}
          name="password"
        />
        {show ? (
          <AiFillEye onClick={() => setShow(false)} className="eyelogin" />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setShow(true)}
            className="eyelogin"
          />
        )}

        {loader ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#0069D9"
            barColor="#7000A5"
          />
        ) : (
          <FButton
            bname={Commonbutton}
            title="Login to Continue"
            click={handleClick}
          />
        )}

        <AuthenticationLink
          className="reglink"
          title="Don’t have an account ?"
          href="/"
          hreftitle="Sign Up"
        />
      </div>
    </Container>
  );
};

export default Login;

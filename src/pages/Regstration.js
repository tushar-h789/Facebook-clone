import React, { useState } from "react";
import FButton from "../components/FButton";
import Header from "../components/Header";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AuthenticationLink from "../components/AuthenticationLink";
import Alert from "@mui/material/Alert";
import {toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from  'react-loader-spinner'

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

const Regstration = () => {
  const auth = getAuth();
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  let [error, setError] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  let [show, setShow] = useState();
  let [loader, setLoader] =useState(false)

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

    //   if(e.target.name == "email"){
    //     setFormData({...formData, email:e.target.value } )
    //     console.log(formData);
    //   }else if(e.target.name == "fullname"){
    //     setFormData({...formData, name:e.target.value})
    //     console.log(formData);
    //   }else{
    //     setFormData({...formData, password:e.target.value})
    //     console.log(formData);
    //   }
    // }

    // let handleEmail= (e)=>{
    //   console.log(e.target.value);
    // }
    // let handleName= (e)=>{
    //   console.log(e.target.value);
    // }
    // let handlePassword= (e)=>{
    //   console.log(e.target.value);
  };

  let handleClick = () => {
    let expression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formData.email === "") {
      setError({ ...error, email: "Email Required" });
    } else if (!expression.test(formData.email)) {
      setError({ ...error, email: "Valid Email Required" });
    } else if (formData.fullname === "") {
      setError({ ...error, fullname: "Full Name Required" });
    } else if (formData.password === "") {
      setError({ ...error, password: "Password Required" });
    } else {
      setLoader(true)
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((user) => {
          const auth = getAuth();
          sendEmailVerification(auth.currentUser).then(() => {
            toast("Registeration successfull ! Please check your mail.");
            setTimeout(() => {
              setLoader(false)
              navigate("/login");
            }, 2000);
          });
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode.includes("auth/email-already-in-use")) {
            setError({ ...error, email: "Email Already Exist" });
          }
        });
    }
  };

  return (
    <div className="container">
      <Header>
        <Heading as="h2" title="Get started with easily register" />
        <SubHeading as="p" />
      </Header>
      <div className="flex flex-col items-center my-5 ">
        <InputBox
          className="inputbox"
          label="Email"
          name="email"
          type="text"
          variant="outlined"
          textChange={handleForm}
        />
        {error.email && (
          <Alert className="w-[370px]" variant="filled" severity="error">
            {error.email}
          </Alert>
        )}

        <InputBox
          className="inputbox"
          label="Full Name"
          name="fullname"
          type="email"
          variant="outlined"
          textChange={handleForm}
        />
        {error.fullname && (
          <Alert className="w-[370px]" variant="filled" severity="error">
            {error.fullname}
          </Alert>
        )}

        <div className="reginput">
          <InputBox
            className="inputbox"
            label="Password"
            name="password"
            type={show ? "text" : "password"}
            variant="outlined"
            textChange={handleForm}
          />

          {show ? (
            <AiFillEye onClick={() => setShow(false)} className="eyeicon" />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setShow(true)}
              className="eyeicon"
            />
          )}
        </div>
        {error.password && (
          <Alert className="w-[370px]" variant="filled" severity="error">
            {error.password}
          </Alert>
        )}

        
        {loader
        ?
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#0069D9'
            barColor = '#7000A5'
          />
        :
        <FButton bname={Commonbutton} click={handleClick} title="Sign Up" />
        }
          
        <AuthenticationLink
          className="reglink"
          title="Already  have an account ?"
          href="/login"
          hreftitle="Sign In"
        />
      </div>
    </div>
  );
};

export default Regstration;

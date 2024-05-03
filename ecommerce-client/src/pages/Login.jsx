import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import footerImg from "/assets/loginFooter.png";
import { setReduxUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import BreadCrumb from "../components/common/BreadCrumb";

export default function Login() {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  // if (true) {
  //   // dispatch = useDispatch(); // we can only call redux functions via this dispatch function
  // }

  // function temp(){
  //   // dispatch = useDispatch(); // we can only call redux functions via this dispatch function
  //   useEffect(() =>{
  //     console.log("inside useeffect");
  //   },[])
  // }

  const [formData, setFormData] = useState({
    email: "s@s.com",
    password: "password",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        toast.success("success");
        navigate("/");
        console.log("success");
        dispatch(setReduxUser(res.data.user)); // change redux store value

        localStorage.setItem("token", res.data.access_token);
      })
      .catch((err) => {
        console.log(err);

        if (err.response?.status === 400) {
          console.log(err.response.data.errors);
          toast.error("bad request");
        } else if (err.response?.status === 401) {
          toast.error(err.response.data.msg);
        } else {
          toast.error("seomthing went wrong.try again later..");
        }
      });
  }
  return (
    <>
      {/* Top Div with text */}
      {/* {
        JSON.stringify(user)
      } */}
      <BreadCrumb title="Login" />
      {/* Login Panel */}
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="space-y-2 p-[24px] font-lato  ">
          <div>
            <h1 className="font-Josefin mb-0 text-center text-[32px] font-bold">
              Login
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={() => {}}
                value={formData.email}
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                className="form-control"
                type="password"
                value={formData.password}
                placeholder="Password"
              />
            </div>
            <a href="/forgetPassword" className="text-sm text-[#9096B2]">
              Forget Your Password ?
            </a>
            <button type="submit" className="btn w-full">
              sign in
            </button>
          </form>

          <p className="text-gray-light">
            Don’t have an Account?
            <a href="/Signup" className="text-[#558cf3]">
              Create account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
``;

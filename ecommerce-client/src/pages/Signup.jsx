import React, { useState } from "react";
import footerImg from "/assets/loginFooter.png";
import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "../components/common/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formError, setFormError] = useState({
    // name: "requried",
    // email: "already used",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setFormError({});
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then((res) => {
        toast.success("success");
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);

        if (err.response?.status === 400) {
          console.log(err.response.data.errors);
          toast.error("bad request");

          let errorsObj = {};

          err.response.data.errors.forEach((element) => {
            errorsObj[element.param] = element.msg;
          });

          setFormError(errorsObj);
        } else {
          toast.error("someting went wrong. try agin later.");
        }

        setIsLoading(false);
      });
  }

  return (
    <>
      <BreadCrumb title="Signup" />
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="space-y-2 p-[24px] font-lato  ">
          <div>
            <h1 className="font-Josefin mb-0 text-center text-[32px] font-bold">
              Signup
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>

          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="name"
                className="form-control"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage msg={formError.name} />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ErrorMessage msg={formError.email} />
            </div>
            <div className="form-group">
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage msg={formError.password} />
            </div>
            <div className="form-group">
              <select
                placeholder="Role"
                className="form-control"
                name="role"
                id=""
              >
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
              <ErrorMessage msg={formError.role} />
            </div>
            <a href="/forgetPassword" className="text-sm text-[#9096B2]">
              Forget Your Password ?
            </a>
            <button disabled={isLoading} type="submit" className="btn w-full">
              {isLoading ? "loading..." : "sign up"}
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
      <img src={footerImg} className="container my-[40px]" />
      <ToastContainer theme="colored" />
    </>
  );
}
``;

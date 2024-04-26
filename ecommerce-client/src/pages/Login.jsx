import React from "react";
import { Link } from "react-router-dom";
import footerImg from "/assets/loginFooter.png";

export default function Login() {
  return (
    <>
      {/* Top Div with text */}
      <div className="  bg-[#F6F5FF]">
        <div className="container relative">
          <div className=" mb-8 py-[39px] sm:py-[47px] md:py-[57px] lg:py-[68px] xl:py-[82px] xxl:py-[98px]">
            {/* text */}
            <h1 className=" font-Josefin text-[14px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] xxl:text-[36px]">
              My Account
            </h1>
            <div className=" font-Lato flex gap-[5px] text-[16px]">
              <Link to="/" className="hover:text-secondary">
                Home .
              </Link>
              <Link to="/pages" className="hover:text-secondary">
                Pages .
              </Link>
              <span className="text-secondary">My Account</span>
            </div>
          </div>
        </div>
      </div>

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

          <div className="space-y-4 ">
            <input
              className="border-gray-light h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border-gray-light h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type={false ?"text":"password"}
              placeholder="Password"
            />
          </div>

          <a href="/forgetPassword" className="text-[#9096B2]">
            Forget Your Password
          </a>
          <button className="hover:bg-secondary-dark w-full rounded-[3px] bg-secondary py-[10px] text-white hover:shadow-[0px_3px_25px_0px_rgba(0,0,0,0.15)]">
            Sign in
          </button>
          <p className="text-gray-light">
            Don’t have an Account?
            <a href="/Signup" className="text-[#558cf3]">
              Create account
            </a>
          </p>
        </div>
      </div>
      <img src={footerImg} className="container my-[40px]" />
    </>
  );
}
``;

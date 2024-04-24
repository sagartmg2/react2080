import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      {/* Top Div with text */}
      <div className="container relative  bg-[#F6F5FF]">
        <div className=" mb-8 py-[39px] sm:py-[47px] md:py-[57px] lg:py-[68px] xl:py-[82px] xxl:py-[98px]">
          {/* text */}
          <h1 className=" font-Josefin text-[14px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] xxl:text-[36px]">
            My Account
          </h1>

          <div className=" flex gap-[5px] font-Lato text-[16px]">
            <Link to="/">Home .</Link>
            <Link to="/pages">Pages .</Link>
            <span className="text-secondary">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Panel */}
      <div className="relative mt-[57px] text-center shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] sm:w-[356px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="mb-0 text-center font-Josefin text-[32px] font-bold">
              Login
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>

          <div className="space-y-4 ">
            <input
              className="border-gray-dark h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border-gray-dark h-[36px] w-full rounded-[2px] border pl-[13px] focus:shadow-[0px_6px_25px_0px_rgba(0,0,0,0.4)] focus:outline-none sm:h-[43px] md:h-[52px]"
              type="password"
              placeholder="Password"
            />
          </div>

          <a href="/forgetPassword" className="text-[#9096B2]">
            Forget Your Password
          </a>

          <button className="hover:bg-secondary-dark w-full rounded-[3px] bg-secondary py-[10px] text-white hover:shadow-[0px_3px_25px_0px_rgba(0,0,0,0.15)]">
            Sign in
          </button>

          <a href="/Signup" className="text-gray-dark">
            Don’t have an Account?Create account
          </a>
        </div>
      </div>
    </>
  );
}

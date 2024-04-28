import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import CssPositions from "../CssPositions";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function TopHeader(props) {
  return (
    <div className="bg-primary">
      <nav className=" py-[14px] text-center font-josefin text-white sm:container sm:flex sm:justify-between">
        <div className="sm:flex sm:gap-4">
          <p>
            <CiMail className="inline-block" /> mhhasanul@gmail.com
          </p>
          <p>
            <CiMail className="inline-block" /> 092345234
          </p>
        </div>
        <div className="">
          <span>
            <Link to={""}> {props.user?.name}</Link>
          </span>
          {props.user ? (
            <span onClick={() =>{
                props.setUser(null)
            }}>logout</span>
          ) : (
            <span>
              <Link to={"/login"}> login </Link>
            </span>
          )}

          <span className="ml-4">cart</span>
        </div>
      </nav>
    </div>
  );
}

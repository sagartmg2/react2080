import React from "react";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-[#7E33E0] p-[14px] text-white flex justify-between" >
          <div>
            <CiMail className="inline-block" /> mhhasanul@gmail.com
          </div>
          <div className="">
            <span>login</span>
            <span className="ml-4">cart</span>
          </div>
        </nav>
        <nav></nav>
      </header>
    </>
  );
}

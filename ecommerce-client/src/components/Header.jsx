import React from "react";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
export default function Header() {
  return (
    <header>
      <div className="bg-primary">
        <nav className=" container flex  justify-between py-[14px] font-josefin text-white">
          <div>
            <CiMail className="inline-block" /> mhhasanul@gmail.com
          </div>
          <div className="">
            <span>login</span>
            <span className="ml-4">cart</span>
          </div>
        </nav>
      </div>

      <nav className="container justify-between   pb-[12px] pt-[18px] sm:flex ">
        <div className="flex w-full items-center justify-between lg:w-auto lg:gap-[90px]">
          <a
            id="logo"
            href=""
            className="leading-auto mb-0 mb-1 inline-block  border font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
          >
            Hekto
          </a>
          <div className="hidden  md:flex md:gap-4 ">
            <a href="" className="text-secondary">
              home
              {/* <span className="text-[9px] ml-1">v</span> */}
            </a>
            <a href="" className="hover:text-secondary">
              products
            </a>
            <a href="" className="hover:text-secondary">
              pages
            </a>
            <a href="" className="hover:text-secondary">
              blogs
            </a>
            <a href="" className="hover:text-secondary">
              members
            </a>
          </div>
          <IoMenu className="text-3xl md:hidden " />
        </div>

        <form className="hidden lg:flex">
          <input
            className="border border-primary-light px-2
              py-1
             focus:border-secondary focus:outline-none focus:transition-all "
            type="text"
          />
          <button className="bg-secondary px-3">
            <CiSearch className="text-white" />
          </button>
        </form>
      </nav>
    </header>
  );
}

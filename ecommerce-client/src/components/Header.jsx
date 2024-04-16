import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <header>
        <div className="bg-primary">
          <nav className=" font-josefin container  py-[14px] text-white flex justify-between">
            <div>
              <CiMail className="inline-block" /> mhhasanul@gmail.com
            </div>
            <div className="">
              <span>login</span>
              <span className="ml-4">cart</span>
            </div>
          </nav>
        </div>

        <nav className="container sm:flex   justify-between pt-[18px] pb-[12px] ">
          <div className="flex gap-[90px] items-center">
            <a
              id="logo"
              href=""
              className="inline-block leading-auto text-[34px] font-josefin font-semibold text-primary-dark hover:text-secondary"
            >
              Hekto
            </a>
            <div className="flex gap-4">
              <a href="" className="text-secondary">
                home
                {/* <span className="text-[9px] ml-1">v</span> */}
              </a>
              <a href="" className="hover:text-secondary">
                products
              </a>
            </div>
          </div>

          <form className=" flex">
            <input
              className="focus:border-secondary px-2 py-1
              focus:transition-all
             focus:outline-none border border-primary-light "
              type="text"
            />
            <button className="bg-secondary px-3">
              <CiSearch className="text-white" />
            </button>
          </form>
        </nav>
      </header>
  )
}

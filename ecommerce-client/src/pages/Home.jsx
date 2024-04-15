import React from "react";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Banner1 from "../assets/banner-1.png"

export default function Home() {
  return (
    <>
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

        <nav className="container flex  justify-between pt-[18px] pb-[12px] ">
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
              <span className="text-[9px] ml-1">v</span>
            </a>
            <a href="" className="hover:text-secondary">
              products
            </a>
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
      {/* <img src="../assets/banner-1.png" /> */}
      {/* <img src={Banner1} /> */}
      <img src="/assets/banner-1.png" />

      {/* ctrl + shift + \ */}
      <p className="font-serif mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>
      <p className="font-sans mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>
      <p className="font-mono mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>
      <p className="font-josefin mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>

      <p className="font-lato mb-8 w-[150px] ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>
    </>
  );
}

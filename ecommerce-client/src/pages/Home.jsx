import React from "react";
import Banner1 from "../assets/banner-1.png";
import Header from "../components/Header";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <Banner />

        <div
          id="box"
          className="mt-20 h-20 w-20 border-black bg-purple-50  sm:bg-purple-300 md:bg-red-500"
        ></div>

        {/* ctrl + shift + \ */}
        <p className="mb-8 font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-sans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-mono">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-josefin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>

        <p className="mb-8 w-[150px] font-lato ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
      </div>
    </>
  );
}

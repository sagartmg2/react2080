import React from "react";
import Banner1 from "../assets/banner-1.png";
import Header from "../components/Header";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <div id="box" className="h-20 w-20 bg-purple-50 sm:bg-purple-300 md:bg-red-500  border-black mt-20"></div>

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

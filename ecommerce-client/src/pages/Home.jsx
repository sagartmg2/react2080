import React from "react";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <header>
        <nav className="container bg-[#7E33E0] py-[14px] text-white flex justify-between">
          <div>
            <CiMail className="inline-block" /> mhhasanul@gmail.com
          </div>
          <div className="">
            <span>login</span>
            <span className="ml-4">cart</span>
          </div>
        </nav>
        <nav className="bg-black container h-12 "></nav>
      </header>
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
      <p className="font-lato mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
        odit quia quos adipisci enim qui blanditiis dolore maiores voluptatibus
        vitae, ea reiciendis id! Laboriosam provident numquam sint nihil
        reiciendis?
      </p>
    </>
  );
}

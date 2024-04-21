import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function Product() {
  return (
    <div className=" group relative bg-primary-light   shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  ">
      <div className=" absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full border border-primary transition-all group-hover:flex">
        <FaCartPlus className="text-primary" />
      </div>
      <img src="/assets/chair-1.png" className="mx-auto mb-[10px] mt-[32px] " />
      <div className="bg-white p-[15px]  text-center  transition-all group-hover:bg-primary  group-hover:text-white">
        <p>Cantilever chair</p>
        <p>Code - Y523201</p>
        <p>$42.00</p>
      </div>
    </div>
  );
}

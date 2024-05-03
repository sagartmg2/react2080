import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb({ title }) {
  return (
    <div className="  bg-[#F6F5FF]">
      <div className="container relative">
        <div className=" mb-8 py-[39px] sm:py-[47px] md:py-[57px] lg:py-[68px] xl:py-[82px] xxl:py-[98px]">
          {/* text */}
          <h1 className=" font-Josefin text-[14px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[25px] xxl:text-[36px]">
            {title}
          </h1>
          <div className=" font-Lato flex gap-[5px] text-[16px]">
            <Link to="/" className="hover:text-secondary">
              Home .
            </Link>
            <Link to="/products" className="hover:text-secondary">
              Products .
            </Link>
            <span className="text-secondary">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

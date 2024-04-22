import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function Product(props) {
  return (
    <div className=" group relative bg-primary-light   shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  ">
      <div className=" absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full border border-primary transition-all group-hover:flex">
        <FaCartPlus className="text-primary" />
      </div>
      <img src={props.image} className="h-[150px] w-full object-cover mx-auto mb-[10px] mt-[32px] " />
      <div className="bg-white p-[15px]  text-center  transition-all group-hover:bg-primary  group-hover:text-white">
        <p>{props.name}</p>
        <p>Code - Y523201</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

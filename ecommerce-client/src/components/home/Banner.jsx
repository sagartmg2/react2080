import React from "react";

export default function Banner(props) {
  return (
    <>
      {/* <img src="../assets/banner-1.png" /> */}
      {/*  <img src={Banner1} /> */}
      <div
        className={`${props.background} bg-banner-1]  bg-cover bg-center bg-no-repeat`}
      >
        <div className="container py-[116px] sm:py-[130px] md:py-[148px] lg:py-[166px] xl:py-[188px] xxl:py-[210px] ">
          <p className="text-[18px] font-bold text-secondary">{props.label}</p>
          <p className="text-[28px] font-bold sm:text-[33px] md:text-[37px] lg:text-[42px] xl:text-[47]  xxl:text-[53px]">
            {props.heading}
          </p>
          <p>{props.description}</p>
          <button className="btn mt-4" to={props.redirectUrl}>
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}

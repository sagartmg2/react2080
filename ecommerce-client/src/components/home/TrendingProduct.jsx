import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";
import sale from "/assets/sale.png";
import saletext from "/assets/saletext.png";

function TrendingProduct(props) {
  const { image, title, currentPrice, previousPrice } = props;
  return (
   <>
    <div className="justity-center group relative flex w-[205px] flex-col items-center overflow-hidden shadow-lg md:h-[301px] md:w-[280px]">
        <div className="absolute -top-20 left-1 transition-all delay-100 duration-1000 group-hover:top-0">
          <img src={sale} className="relative" />
          <img src={saletext} className="absolute left-8 top-4" />
        </div>
        <div className="absolute -left-10 bottom-12 flex flex-col gap-2 text-xl text-[#2F1AC4] transition-all  delay-200 duration-1000 group-hover:left-2 md:text-2xl">
          <BsCart2 className="rounded-full bg-[#EEEFFB] p-1 " />
          <AiOutlineHeart className="rounded-full bg-[#EEEFFB] p-1 " />
          <AiOutlineZoomIn className="rounded-full bg-[#EEEFFB] p-1 " />
        </div>
        <div className="grow bg-[#F7F7F7] px-[32px] py-[14px] group-hover:bg-white">
          <img src={image} />
        </div>
        <div className="flex grow items-center gap-3">
          <p className="text-sm font-bold text-[#151875] md:text-base">
            {title}
          </p>
          <p className="text-[12px] font-bold text-[#151875] md:text-sm">
            {currentPrice}
          </p>
          <p className="text-[10px] text-[#FB2448] md:text-[12px]">
            {previousPrice}
          </p>
        </div>
      </div>
   </>
  )
}

export default TrendingProduct

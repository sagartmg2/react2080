import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export const TrendingProduct = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((response) => setProducts(response.data.products.slice(0, 6))); // Slice to get only the first 5 products
  }, []);
  return (
    <>
      <h1 className="mb-[46px] mt-[60px] text-center font-josefin text-[22px] font-bold md:mb-[56px] md:mt-[72px] md:text-[32px] lg:mb-[68px] lg:mt-[88px] lg:text-[42px] xl:mb-[82px] xl:mt-[106px] 2xl:mb-[98px] 2xl:mt-[128px]">
        Leatest Products
      </h1>
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Products.map((el) => {
          return (
            <div className=" group relative bg-[#F7F7F7] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
              <div className="bg-[#F7F7F7] ">
                <img
                  src="/assets/product.png"
                  alt=""
                  className="mx-auto w-[115px] md:w-[142px] lg:w-[170px] xl:w-[200px] 2xl:w-[246px]"
                />
                <div className="absolute left-[18px] top-[32px] hidden gap-4 group-hover:grid lg:left-[15px] lg:top-[90px]">
                  <AiOutlineShoppingCart className="text-[#2F1AC4] md:text-[20px] " />
                  <AiOutlineHeart className="text-[#2F1AC4] md:text-[20px] " />
                  <AiOutlineSearch className="text-[#2F1AC4] md:text-[20px] " />
                </div>
              </div>
              <div className="lg:[30px] flex justify-between bg-white px-4 py-[20px]">
                <p className="font-josefin text-[16px] font-bold text-[#151875]">
                  {el.name}
                </p>
                <div className="flex gap-2">
                  <p>${el.price}</p>
                  <p className="text-[#FB2448] line-through">${el.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

import React from "react";
import footerImg from "/assets/loginFooter.png";

function Footer() {
  return (
    <div>
      <img src={footerImg} className="container my-[40px]" />

      <div className="grid grid-flow-row gap-4 bg-[#EEEFFB] p-[50px] sm:grid-cols-2 md:grid-cols-4 md:place-content-center">
        <div className="flex flex-col gap-4">
          <p className="text-[20px] font-bold md:text-[38px]">Hekto</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter email address"
              className="border p-1"
            />
            <button className="bg-secondary px-2 py-1 text-xs text-white">
              Sign Up
            </button>
          </div>
          <p className="text-xs font-normal text-[#8A8FB9] md:text-base">
            Contact Info
          </p>
          <p className="text-xs font-normal text-[#8A8FB9] md:text-base">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold md:text-[22px]">Catagories</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9] md:text-base">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold md:text-[22px]">Customer Care</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9] md:text-base">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold md:text-[22px]">Pages</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9] md:text-base">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

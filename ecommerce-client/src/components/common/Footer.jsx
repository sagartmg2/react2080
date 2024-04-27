import React from "react";

export default function Footer() {
  return (
    <>
      <div className="grid grid-flow-row gap-4 bg-[#EEEFFB] p-[50px] sm:grid-cols-2 md:grid-cols-4 md:place-content-center">
        <div className="flex flex-col gap-4">
          <p className="text-[20px] font-bold">Hekto</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter email address"
              className="form-control w-auto"
            />
            <button className="bg-secondary px-2 py-1 text-xs text-white">
              Sign Up
            </button>
          </div>
          <p className="text-xs font-normal text-[#8A8FB9]">Contact Info</p>
          <p className="text-xs font-normal text-[#8A8FB9]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-josefin font-bold">Catagories</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-josefin font-bold">Customer Care</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-josefin font-bold">Pages</p>
          <ul className="flex flex-col gap-2 text-xs font-normal text-[#8A8FB9]">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </>
  );
}

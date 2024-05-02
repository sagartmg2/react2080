import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/slice/cartSlice";
import BreadCrumb from "../components/common/BreadCrumb";
import { RxCross2 } from "react-icons/rx";

export default function Cart() {
  let cartItems = useSelector((reduxStore) => reduxStore.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <BreadCrumb title="Shopping Cart" />
      <div className="container">
        <div className="mb-2 grid grid-cols-5 justify-items-center gap-1 text-xl font-semibold">
          <p className="col-span-2">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {cartItems.map((el) => (
          <div className=" grid grid-cols-5  justify-items-center gap-2 border-b-2 border-b-[#E1E1E4] p-2">
            <div className="relative">
              <img src={el.image} />
              <RxCross2 className="absolute -right-1 -top-1 h-[20px] w-[20px] cursor-pointer rounded-full bg-black p-1 text-base text-white" />
            </div>
            <div className="text-bold align-start text-xs text-[#A1A8C1] md:text-base">
              <p className="font-bold text-black">{el.name}</p>
              <p>Color: White</p>
              <p>Size: XL</p>
            </div>
            <div className="self-center">
              <p>${el.price}</p>
            </div>
            <div className="flex items-center text-center text-xl font-semibold">
              <span className="w-[20px] cursor-pointer rounded-full border">
                -
              </span>
              <span className="w-[20px] rounded-full border">
                {el.quantity}
              </span>
              <span className="w-[20px] cursor-pointer rounded-full border">
                +
              </span>
            </div>

            <div className="self-center">
              <p>£219.00</p>
            </div>
          </div>
        ))}
        <button
          className="btn mt-4"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          clear all items
        </button>
      </div>
    </>
  );
}

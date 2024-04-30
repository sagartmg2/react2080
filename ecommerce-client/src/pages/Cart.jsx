import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/slice/cartSlice";

export default function Cart() {
  let cartItems = useSelector((reduxStore) => reduxStore.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div>List of Cart times</div>
        {/* <li>one</li>
        <li>two</li> */}
        {JSON.stringify(cartItems)}
        <br />
        <br />
        <button
          className="btn"
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

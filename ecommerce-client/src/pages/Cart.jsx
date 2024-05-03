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
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <th>{}</th>
            <th>1000</th>
            <th>2</th>
          </tbody>
        </table>
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

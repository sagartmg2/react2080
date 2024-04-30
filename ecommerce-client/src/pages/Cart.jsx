import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispath = useDispatch();
  let cartItem = useSelector((reduxStore) => reduxStore.cart.value);

  return (
    <>
      <div>Shopping Cart List</div>

      {JSON.stringify(cartItem)}
      <ul>
        {/* <li>one</li>
        <li>two</li> */}
      </ul>
    </>
  );
}

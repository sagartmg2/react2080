import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../../redux/slice/cartSlice";

export default function Slug() {
  const [product, setProduct] = useState({});
  let dispatch = useDispatch();
  let cartItem = useSelector((reduxStore) => reduxStore.cart.value);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <div>
      <BreadCrumb />
      {/* Name: {JSON.stringify(product.name)} <br />
      Price: ${JSON.stringify(product.price)} */}
      <div className="container">
        {JSON.stringify(product)}
        <li>
          {product.name}: ${product.price}
        </li>
        <img src={product.image} />

        <div
          className="btn"
          onClick={() => {
            dispatch(addCartItems(product));
          }}
        >
          add to cart
        </div>
      </div>
    </div>
  );
}

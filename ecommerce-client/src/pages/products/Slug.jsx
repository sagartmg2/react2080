import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { addCartItem } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

export default function Slug() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <div className="container">
        {/* {JSON.stringify(product)} */}
        <p className="text-4xl">{product.name}</p>
        <br />
        <br />
        <button
          className="btn"
          onClick={() => {
            dispatch(addCartItem(product));
          }}
        >
          add to cart
        </button>
      </div>
    </>
  );
}

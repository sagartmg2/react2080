import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { addCartItem } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { CiHeart } from "react-icons/ci";

export default function Slug() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <BreadCrumb title={product.name} />

      <div className="container">
        <div className="flex">
          <img src={product.image} />
          {isLoading && (
            <>
              <Skeleton className="h-[250px] w-[250px]" />
            </>
          )}
          <div className="">
            <h1>{product.name}</h1>
            {isLoading && (
              <>
                <Skeleton className="ml-4 h-10 w-[250px]" />
              </>
            )}
            <p className="text-secondary line-through">${product.price}</p>
            {isLoading && (
              <>
                <Skeleton className="ml-4 h-10 w-[200px]" />
              </>
            )}

            <p>{product.categories}</p>
            {isLoading && (
              <>
                <Skeleton className="ml-4 h-10 w-[150px]" />
              </>
            )}
            {/* <p>{product.description}</p> */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates non est cupiditate ipsum cumque, optio nemo natus omnis
              unde dolore quo quasi nostrum consequatur modi possimus qui eos,
              quaerat labore.
            </p>
            <div className="flex">
              <button
                className="btn"
                onClick={() => {
                  dispatch(addCartItem(product));
                }}
              >
                Add To Cart
              </button>
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

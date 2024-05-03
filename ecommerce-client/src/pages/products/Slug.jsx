import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { addCartItem } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";

export default function Slug() {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
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

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/trending`)
      .then((res) => {
        setRelatedProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <BreadCrumb title="Product Details" />
      <div className="container grid gap-4 p-6 shadow-xl md:grid-cols-2">
        <img
          src={product.image}
          className="w-[100%] self-stretch object-cover"
        />

        <div className="flex flex-grow flex-col gap-4 p-4">
          <p className="font-semibold text-[#0D134E] md:text-[36px]">
            {product.name}
          </p>
          <div className="flex items-center gap-2">
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <img src="/assets/star.png" className="h-[12px] w-[12px]" />
            <span>(1000)</span>
          </div>
          <div className="flex gap-1 md:gap-2">
            <p className="font-bold text-[#151875]">$50000</p>
            <p className="font-bold text-[#FB2E86] line-through">$70000</p>
          </div>
          <p>Color</p>
          <p className="font-semibold text-[#A9ACC6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => dispatch(addCartItem(product))}
              className="font-bold text-[#151875]"
            >
              Add To cart
            </button>

            <CiHeart className="text-[#535399]" />
          </div>
          <p className="font-semibold text-[#151875]">
            Categories: {product.categories}
          </p>
          <p className="font-semibold text-[#151875]">Tags</p>
          <div className="flex gap-4 font-semibold text-[#151875]">
            <p>Share </p>
            <div className="flex gap-2 p-2">
              <img src="/assets/fbicon.png" alt="" />
              <img src="/assets/instaLogo.png" alt="" />
              <img src="/assets/twitterLogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[53px] bg-[#F9F8FE] p-4 md:mt-[133px]">
        <div className="container grid gap-4">
          <div className="flex cursor-pointer gap-2 text-[14px] font-semibold  text-[#151875] md:text-[24px]">
            <p className="hover:underline">Description</p>
            <p className="hover:underline">Additional Info</p>
            <p className="hover:underline">Reviews</p>
            <p className="hover:underline">Video</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[#151875]">Varius tempor.</p>
            <p className="text-xs text-[#A9ACC6] md:text-[16px]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[#151875]">More details</p>
            <ul className="list-image-arrow p-2 text-xs text-[#A9ACC6] md:text-[16px]">
              <li>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-[50px] grid gap-4 md:mt-[126px]">
        <p className="font-bold text-[#101750] md:text-[36px]">
          Related Products
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {relatedProducts.map((el) => {
            return (
              <div className="flex flex-col items-center gap-2" key={el._id}>
                <img
                  src={el.image}
                  className="h-[340px] self-stretch object-cover"
                />
                <p className="font-bold text-[#151875]">{el.name}</p>
                <p className="font-semibold text-[#151875]">${el.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

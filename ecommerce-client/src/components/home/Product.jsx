import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCartItem } from "../../redux/slice/cartSlice";

export default function Product(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props._id);

  return (
    <div
      onClick={() => {
        navigate(`/products/${props._id}`);
      }}
      className="group relative bg-primary-light shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]   hover:cursor-pointer  "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addCartItem(props));
        }}
        className=" absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full border border-primary transition-all group-hover:flex"
      >
        <FaCartPlus className="text-primary" />
      </div>
      <img
        src={props.image}
        className="mx-auto mb-[10px] mt-[32px] h-[150px] w-full object-cover "
      />
      <div className="bg-white p-[15px]  text-center  transition-all group-hover:bg-primary  group-hover:text-white">
        <p>
          {" "}
          <Link to={"/"}>{props.name} </Link>
        </p>
        <p>Code - Y523201</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

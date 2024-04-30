import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import CssPositions from "../CssPositions";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout, setReduxUser } from "../../redux/slice/userSlice";

export default function Header() {
  let user = useSelector((store) => store.user.value);
  let dispatch = useDispatch();
  let cartItem = useSelector((reduxStore) => reduxStore.cart.value);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    console.log("show menu");
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      {/* <CssPositions/> */}
      <div className="bg-primary">
        <nav className=" py-[14px] text-center font-josefin text-white sm:container sm:flex sm:justify-between">
          <div className="sm:flex sm:gap-4">
            <p>
              <CiMail className="inline-block" /> mhhasanul@gmail.com
            </p>
            <p>
              <CiMail className="inline-block" /> 092345234
            </p>
          </div>
          <div className="">
            {user ? (
              <>
                {JSON.stringify(user?.name)}
                <span
                  onClick={() => {
                    // dispatch(setReduxUser(null))
                    dispatch(logout());
                  }}
                >
                  logout
                </span>
              </>
            ) : (
              <Link to={"/login"}> login </Link>
            )}
            <Link to={"/cart"} className="ml-4">
              cart ({cartItem.length})
            </Link>
          </div>
        </nav>
      </div>

      <nav className="container justify-between   pb-[12px] pt-[18px] sm:flex ">
        <div className="flex w-full items-center justify-between lg:w-auto lg:gap-[90px]">
          <Link
            id="logo"
            to="/"
            className="leading-auto inline-block font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
          >
            Hekto
          </Link>
          <div
            className={`${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} fixed bottom-0 right-0 top-0 z-20 flex w-[50%]   flex-col bg-orange-300   p-12 transition-all ease-linear md:static md:w-auto md:flex-row  md:gap-4 md:bg-transparent md:p-0`}
          >
            <IoMdClose
              className="cursor-pointer text-[4rem] md:hidden md:hover:text-red-600"
              onClick={toggleMenu}
            >
              Close
            </IoMdClose>
            {/* <button className="md:hidden" onClick={toggleMenu}>
              close
            </button> */}
            <Link to="/" className="text-secondary">
              home
              {/* <span className="text-[9px] ml-1">v</span> */}
            </Link>
            <Link to="/products" className="hover:text-secondary">
              products
            </Link>
            <a href="" className="hover:text-secondary">
              pages
            </a>
            <a href="" className="hover:text-secondary">
              blogs
            </a>
            <a href="" className="hover:text-secondary">
              members
            </a>
          </div>
          {/* {isMenuOpen && (
            <>
              <ul>
                <li>home</li>
                <li>staic</li>
              </ul>
              <button onClick={toggleMenu}>close</button>
            </>
          )} */}
          <IoMenu onClick={toggleMenu} className="text-3xl md:hidden " />
        </div>

        <form className="hidden lg:flex">
          <input
            className="border border-primary-light px-2
              py-1
             focus:border-secondary focus:outline-none focus:transition-all "
            type="text"
          />
          <button className="bg-secondary px-3">
            <CiSearch className="text-white" />
          </button>
        </form>
      </nav>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(0,0,0,0.5)]"
        ></div>
      )}
    </header>
  );
}

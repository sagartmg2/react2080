import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import footerImg from "/assets/loginFooter.png";

export default function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <img src={footerImg} className="container my-[40px]" />

      <Footer />
    </>
  );
}

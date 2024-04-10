import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function RootElement() {
  return (
    <div>
      <header>
        {/* <a href="/">home</a>
        <a href="/about">about</a>
        <hr /> */}
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/blogs">blogs</Link>
        <Link to="/blogs/one">blogs/one</Link>
        <Link to="/products">products</Link>
      </header>

      <Outlet />

      <footer>footer</footer>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">home</Link>
      <Link to="/counter">counter</Link>
      {/* <a href="/counter">counter</a> */}
      <a href="/todos-api">todos-api</a>
    </header>
  );
}

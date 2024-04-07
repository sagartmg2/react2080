import React from "react";
import { useState } from "react";

export default function ComponentLIfeCyle() {
  const [count, setCount] = useState(0);

  console.log("component mounted.");
  console.log("component did update.");
  console.log("component did unmount.");

  

  return (
    <>
      <div>ComponentLIfeCyle</div>;
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment ({count})
      </button>
    </>
  );
}

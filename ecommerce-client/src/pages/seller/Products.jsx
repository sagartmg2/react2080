import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SellerProducts() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <>
      <div>Seller products</div>
      {JSON.stringify(products)}
    </>
  );
}

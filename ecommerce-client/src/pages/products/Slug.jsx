import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Slug() {
  const [product, setproduct] = useState({});

  const params = useParams();

  useEffect(() => {
    axios.get(
      `https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`,
    );
  }, []);

  return (
    <div>
      <h1>Slug</h1>
    </div>
  );
}

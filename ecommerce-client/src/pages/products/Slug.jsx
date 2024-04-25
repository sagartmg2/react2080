import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";

export default function Slug() {
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <div>
      <BreadCrumb/>
      {JSON.stringify(product)}
    </div>
  );
}

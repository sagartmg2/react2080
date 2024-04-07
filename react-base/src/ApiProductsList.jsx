import axios from "axios";
import React, { useState } from "react";

export default function ApiProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchProducts = () => {
    setisLoading(true);
    let url = `https://dummyjson.com/products/search?q=phone`;
    axios.get(url).then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
      setisLoading(false);
    });
  };

  return (
    <div>
        
      <button onClick={fetchProducts}>fetch Products</button>
      {isLoading && (
        <>
          <p>loading....</p>
        </>
      )}
      <ul>
        {products.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

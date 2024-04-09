import axios from "axios";

import React, { useEffect, useState } from "react";

export default function ApiProductsListAutoLoad() {
  console.log("re-render");
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  const fetchProducts = () => {
    setisLoading(true);
    let url = `https://dummyjson.com/products/search?q=${searchTerm}`;
    axios.get(url).then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
      setisLoading(false);
    });
  };

  useEffect(() =>{
    fetchProducts()
  },[searchTerm])  // dependency array

  return (
    <div>   
      {/* <button onClick={fetchProducts}>fetch Products</button> */}
      {isLoading && (
        <>
          <p>loading....</p>
        </>
      )}

        <input value={searchTerm} onChange={(e) =>{
        setSearchTerm(e.target.value)
        // fetchProducts()
        }} type="text" placeholder="search" />

      <ul>
        {products.map((el,index) => {
          return <li key={el.id} >{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

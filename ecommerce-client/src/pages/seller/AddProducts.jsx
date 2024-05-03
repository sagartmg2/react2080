import axios from "axios";
import React, { useState } from "react";

export default function AddProducts() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: null,
  });

  function handleChange(e) {
    // console.log(e.target.name);
    // console.log(e.target.name.value);
    if (e.target.name == "image") {
      setProductData({ ...productData, image: e.target.files[0] });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");

    let formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("image", productData.image);

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  }

  return (
    <>
      <div className="container">
        <form className="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handleChange}
              value={productData.name}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={handleChange}
              value={productData.price}
              placeholder="price"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={handleChange}
              //   value={formData.price}
              //   placeholder="price"
            />
          </div>
          <button type="submit" className="btn w-full">
            create new product
          </button>
        </form>
      </div>
    </>
  );
}

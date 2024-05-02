import axios from "axios";
import React, { useState } from "react";

export default function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    iamge: null,
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.name.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");

    axios
      .post(
        "https://ecommerce-sagartmg2.vercel.app/api/products",
        {
          name: formData.name,
          price: formData.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
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
              value={formData.name}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={handleChange}
              value={formData.price}
              placeholder="price"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="file"
              name="image"
              //   onChange={handleChange}
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

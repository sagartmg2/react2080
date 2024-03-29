import SingleProduct from "./SingleProduct";
import featuredProducts from "./data/featuredProducts";
import products from "./data/products";

function Products() {
  let data = {
    title: "Products",
  };
  return (
    <>
      <h1>{data.title}</h1>
      <h3>Featured Products </h3>
      <ul>
        {featuredProducts.map((el) => {
          return <SingleProduct product={el} />;
        })}
      </ul>

      <h3>All Products </h3>
      <ul>
        {products.map((el) => {
          return <SingleProduct product={el} />;
        })}
      </ul>
    </>
  );
}

export default Products;

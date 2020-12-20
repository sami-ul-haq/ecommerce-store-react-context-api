import React, { useContext } from "react";
import { ProductsContext } from "../GlobalState/ProductsContext";

const Products = () => {
  const data = useContext(ProductsContext);
  return (
    <div className="products container">
      {data.map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt="not-found" />
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <div className="add-to-cart">Add To Cart</div>
          {product.status === "hot" ? (
            <div className="hot">HOT</div>
          ) : (
            <div className="new">NEW</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;

import React, { useContext } from "react";
import { cartContext } from "../GlobalState/CartContext";
import { productsContext } from "../GlobalState/ProductsContext";

const Products = () => {
  const { dispatch } = useContext(cartContext);
  const products = useContext(productsContext);

  return (
    <div className="products container">
      {products.map((product) => (
        <div className="product-items" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt="not-found" />
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <div
            className="add-to-cart"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                id: product.id,
                product,
              });
            }}
          >
            Add To Cart
          </div>
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

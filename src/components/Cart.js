import React, { useContext } from "react";
import { CartContext } from "../GlobalState/CartContext";

const Cart = () => {
  const { shoppingCart, dispatch } = useContext(CartContext);
  console.log(shoppingCart);
  return (
    <div className="container">
      <h1 className="main-heading">Shopping Cart</h1>
      <div className="cart-container">
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <div className="each-product" key={product.id}>
              <div className="img-cont">
                <img
                  src={product.image}
                  alt="not-found"
                  className="responsive-img"
                />
              </div>
              <div className="prod-name">{product.name}</div>
              <div className="prod-price">${product.price}.00</div>
              <div className="prod-cta">
                <i
                  className="fas fa-plus"
                  onClick={dispatch({
                    type: "INCREMENT",
                    id: product.id,
                    product,
                  })}
                ></i>
                <span className="cart-quantity">{product.qty}</span>
                <i
                  className="fas fa-minus"
                  onClick={dispatch({
                    type: "DECREMENT",
                    id: product.id,
                    product,
                  })}
                ></i>
              </div>
              <div className="total-prod-price">
                ${product.price * product.qty}
              </div>
              <div className="total-prod-price">
                <i
                  className="fas fa-trash-alt"
                  onClick={dispatch({
                    type: "DELETE",
                    id: product.id,
                    product,
                  })}
                ></i>
              </div>
            </div>
          ))
        ) : (
          <span>No Product Found</span>
        )}
      </div>
    </div>
  );
};

export default Cart;

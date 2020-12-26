import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../GlobalState/CartContext";

const Navbar = () => {
  const { qty } = useContext(CartContext);
  return (
    <nav>
      <ul className="right">
        <li>
          <Link to="/">Online Store</Link>
        </li>
      </ul>
      <ul className="left">
        <li>
          <Link to="/cart">
            <span className="shopping-cart">
              <i className="fas fa-cart-plus"></i>
              <span className="cart-count">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

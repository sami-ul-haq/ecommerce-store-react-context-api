import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="right">
        <li>
          <a href="/">Online Store</a>
        </li>
      </ul>
      <ul className="left">
        <li>
          <a href="/">
            <span className="shopping-cart">
              <i className="fas fa-cart-plus"></i>
              <span className="cart-count">0</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

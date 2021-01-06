export const CartReducer = (state, action) => {
  const { shoppingCart, qty, totalPrice } = state;
  console.log(state);

  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  let filtered;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((cart) => cart.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

    case "INCREMENT":
      product = shoppingCart.find((product) => product.id === action.id);
      index = shoppingCart.findIndex((prod) => prod.id === action.id);
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case "DECREMENT":
      product = shoppingCart.find((product) => product.id === action.id);
      index = shoppingCart.findIndex((prod) => prod.id === action.id);
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: totalPrice,
          qty: qty,
        };
      }

    case "DELETE_PRODUCT":
      console.log("I Am Delete");
      filtered = shoppingCart.filter((cart) => cart.id !== action.id);
      product = shoppingCart.find((cart) => cart.id === action.id);
      updatedPrice = totalPrice - product.price * product.qty;
      updatedQty = qty - product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    default:
      return state;
  }
};

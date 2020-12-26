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
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [...shoppingCart, product],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

    case "INCREMENT":
      product = action.product;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((prod) => prod.id === action.id);
      shoppingCart[index] = product;
      return {
        ...state,
        shoppingCart: [...shoppingCart, product],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case "DECREMENT":
      product = action.product;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((prod) => prod.id === action.id);
        shoppingCart[index] = product;
        return {
          ...state,
          shoppingCart: [...shoppingCart, product],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }

    case "DELETE":
      filtered = shoppingCart.filter((item) => item.id !== action.id);
      product = action.product;
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

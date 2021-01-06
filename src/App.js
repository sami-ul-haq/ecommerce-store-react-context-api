import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import CartContextProvider from "./GlobalState/CartContext";
import ProductsContextProvider from "./GlobalState/ProductsContext";

const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Banner />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
};

export default App;

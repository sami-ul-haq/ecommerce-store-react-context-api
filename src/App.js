import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsContextProvider from "./GlobalState/ProductsContext";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <Products />
      </ProductsContextProvider>
    </div>
  );
};

export default App;

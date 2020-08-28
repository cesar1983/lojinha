import React from "react";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import GlobalStyle from "./Globalstyle";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;

import React from "react";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import GlobalStyle from "./Globalstyle";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;

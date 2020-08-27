import React, { useState } from "react";
import Layout from "../../components/UI/Layout";
import Cart from "../../components/Order/Cart";
import ProductList from "../../components/Order/ProductList";

import * as S from "./styles.js";

const Order = () => {
  return (
    <Layout>
      <S.GridWrapper>
        <S.GridColumn>
          <ProductList />
        </S.GridColumn>

        <S.GridColumn>
          <h1>Carrinho</h1>
          <Cart />
        </S.GridColumn>
      </S.GridWrapper>
    </Layout>
  );
};

export default Order;

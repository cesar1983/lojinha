import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../components/UI/Layout";
import Cart from "../../components/Order/Cart";
import ProductList from "../../components/Order/ProductList";

import * as S from "./styles.js";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setProducts(JSON.stringify("[{},{}]"));
  }, []);

  const handleProductClick = (productId) => {
    let changedOrderItems = [...orderItems];

    let newPrice = 0.0;
    const prodOrderIndex = orderItems.findIndex(
      (item) => item.id === productId
    );
    if (prodOrderIndex >= 0) {
      changedOrderItems[prodOrderIndex].orderQuantity++;
      newPrice = changedOrderItems[prodOrderIndex].price;
    } else {
      const prodIndex = products.findIndex((item) => item.id === productId);
      if (prodIndex > -1) {
        const prodInfo = { ...products[prodIndex] };
        prodInfo.orderQuantity = 1;
        changedOrderItems.push(prodInfo);
        newPrice = prodInfo.price;
      }
    }
    setOrderItems(changedOrderItems);
  };

  const handleProductRemoveClick = (productId) => {
    let changedOrderItems = [...orderItems];
    const prodOrderIndex = orderItems.findIndex(
      (item) => item.id === productId
    );
    if (prodOrderIndex >= 0) {
      changedOrderItems[prodOrderIndex].orderQuantity--;
      setTotal(total - changedOrderItems[prodOrderIndex].price);
    }
    if (changedOrderItems[prodOrderIndex].orderQuantity === 0) {
      changedOrderItems.splice(prodOrderIndex, 1);
    }
    setOrderItems(changedOrderItems);
  };

  const emptyCart = () => {};

  const memoizedTotal = useMemo(
    () =>
      orderItems.reduce(
        (subtotal, item) => subtotal + item.orderQuantity * item.price,
        0
      ),
    [orderItems]
  );

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

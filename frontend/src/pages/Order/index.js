import React, { useState, useMemo } from "react";
import Layout from "../../components/Layout";
import * as S from "./styles.js";
import Cart from "../../components/Cart";

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
          <h1>Show Room</h1>
          <S.Products>
            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>

            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>

            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>

            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>

            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>

            <S.Product>
              <S.ProductImage>
                <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
              </S.ProductImage>
              <S.ProductInfo>
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
              </S.ProductInfo>
            </S.Product>
          </S.Products>
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

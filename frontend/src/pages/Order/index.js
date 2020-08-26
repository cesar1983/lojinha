import React from "react";
import Layout from "../../components/Layout";
import * as S from "./styles.js";

const Order = () => {
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
        </S.GridColumn>
      </S.GridWrapper>
    </Layout>
  );
};

export default Order;

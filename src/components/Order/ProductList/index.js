import React, { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext";
import { ProductsContext } from "../../../contexts/ProductsContext";

import SlimButton from "../../UI/SlimButton";

import * as S from "./styles.js";

const ProductList = () => {
  const { addItem } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h1>Produtos</h1>
      <S.Products>
        {products.map((product, index) => {
          return (
            <S.Product key={index}>
              <S.ProductImageContainer>
                <img src={product.image} />
              </S.ProductImageContainer>
              <S.ProductInfo>
                <h5>{product.name}</h5>
                <h6>{product.price}</h6>
                <SlimButton
                  name="add"
                  label="Adicionar"
                  onClickHandler={() => addItem(product)}
                />
              </S.ProductInfo>
            </S.Product>
          );
        })}
      </S.Products>
    </>
  );
};

export default ProductList;

import React from "react";

import * as S from "./styles.js";
import SlimButton from "../../UI/SlimButton";

const someArray = [1, 2, 3, 4, 5, 6, 7];
const ProductList = (props) => (
  <>
    <h1>Produtos</h1>
    <S.Products>
      {Object.values(someArray).map((value, index) => {
        return (
          <S.Product key={index}>
            <S.ProductImage>
              <img src="https://i.pinimg.com/736x/9a/46/da/9a46daf36e591a890b8883b4a111122a.jpg" />
            </S.ProductImage>
            <S.ProductInfo>
              <h5>Winter Jacket</h5>
              <h6>$99.99</h6>
              <SlimButton name="add" label="Adicionar" />
            </S.ProductInfo>
          </S.Product>
        );
      })}
    </S.Products>
  </>
);

export default ProductList;

import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  flex: 1 46%;
  padding: 2rem 0;
`;

export const ProductImageContainer = styled.div`
  max-width: 100%;

  img {
    max-width: 200px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: auto;
`;

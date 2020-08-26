import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const GridColumn = styled.div`
  text-align: center;
  height: 85vh;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 0.8rem;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-button-border);
  }
`;

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  flex: 1 46%;
  padding: 2rem 0;
`;

export const ProductImage = styled.div`
  max-width: 100%;

  img {
    max-width: 200px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: auto;
`;

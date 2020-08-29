import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100%;
  padding: 2rem 5rem;

  @media (max-width: 800px) {
    padding: 2rem 2rem;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border: 0;
  border-collapse: collapse;
  th {
    border: 0;
    border-collapse: collapse;
    color: #aaa;
    font-weight: 300;
  }
  td {
    font: 300 1.2rem Poppins;
    border-bottom: 1px solid #eee;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  tbody tr:hover {
    background-color: #eee;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: right;
  font-size: 2.5rem;
`;

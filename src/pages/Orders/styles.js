import styled from "styled-components";

export const OrdersWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  height: 90vh;
  overflow-y: auto;
`;

export const OrdersTableWrapper = styled.div``;

export const OrdersTable = styled.table`
  width: 100%;
  max-width: 100rem;
  margin: 3rem auto;
  border: 0;
  border-collapse: collapse;
  th {
    border: 0;
    border-collapse: collapse;
    color: #aaa;
    font-weight: 400;
  }
  td {
    font: 300 1.6rem Poppins;
    border-bottom: 1px solid #eee;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 0.5rem;
    line-height: 4rem;
  }
  tbody tr:hover {
    background-color: #eee;
  }
`;

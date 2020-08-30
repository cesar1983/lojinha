import styled from "styled-components";

export const OrderDetailWrapper = styled.div`
  padding: 20px 0;
  text-align: center;
  height: 90vh;
  overflow-y: auto;
`;

export const TableWrapper = styled.div`
  margin: 1rem 5rem;
`;

export const OrderItemsTable = styled.table`
  width: 100%;
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
    padding: 5px;
  }
  tbody tr:hover {
    background-color: #eee;
  }
`;

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

export const ItemDescription = styled.dl`
  border: 3px double #ccc;
  padding: 0.5em;
  dt {
    float: left;
    clear: left;
    width: 100px;
    text-align: right;
    font-weight: bold;
    color: green;
  }
  dt::after {
    content: ":";
  }
  dd {
    margin: 0 0 0 110px;
    padding: 0 0 0.5em 0;
  }
`;

export const DefinitionList = styled.dl`
  margin: 0 auto;
  width: 60rem;
  padding: 0.5em;
`;

export const DefinitionListLabel = styled.dt`
  float: left;
  clear: left;
  width: 100px;
  text-align: left;
  font-weight: bold;
  ::after {
    content: ":";
  }
`;

export const DefinitionListDescripton = styled.dd`
  margin: 0 0 0 110px;
  padding: 0 0 0.5em 0;
  text-align: left;
`;

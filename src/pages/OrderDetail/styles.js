import styled from "styled-components";

export const OrderDetailWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const OrderDetailCard = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: left;
  :hover {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  }
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

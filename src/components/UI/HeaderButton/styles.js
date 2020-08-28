import styled from "styled-components";

export const Button = styled.button`
  font-size: 2rem;
  color: var(--color-button-header-text);
  padding: 1rem 3rem;
  cursor: pointer;
  border: 0px;
  background-color: inherit;
  border: 2px var(--color-button-border) solid;
  border-radius: 0.3rem;
  transition: 0.2s ease-in;

  :link,
  :visited,
  :active {
    border: 2px var(--color-button-border) solid;
  }
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

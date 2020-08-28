import styled from "styled-components";

export const SlimButton = styled.button`
  margin-top: 5px;
  font-size: 1.2rem;
  color: var(--color-slim-button-text);
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  border: 0px;
  background-color: inherit;
  border: 2px var(--color-button-border) solid;
  border-radius: 0.3rem;
  transition: 0.1s ease-in;

  :hover {
    background-color: var(--color-header-background);
    color: #fff;
  }
`;

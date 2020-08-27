import styled from "styled-components";

export const CheckoutButton = styled.button`
  width: 100%;
  font-size: 2rem;
  color: var(--color-button-checkout-text);
  padding: 0.8rem 0;
  cursor: pointer;
  border: 0px;
  background-color: inherit;
  border: 2px var(--color-button-border) solid;
  border-radius: 0.3rem;
  transition: 0.2s ease-in;
  margin-bottom: 1rem;

  :hover {
    background-color: var(--color-header-background);
    color: #fff;
  }
`;

export const ResetCheckoutButton = styled.button`
  width: 100%;
  font-size: 1.5rem;
  color: var(--color-button-checkout-text);
  padding: 0.8rem;
  cursor: pointer;
  border: 0px;
  background-color: inherit;
  border: 2px #ccc solid;
  border-radius: 0.3rem;
  transition: 0.2s ease-in;

  :hover {
    background-color: #ddd;
    color: #000;
  }
`;

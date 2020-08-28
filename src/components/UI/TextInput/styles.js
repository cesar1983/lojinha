import styled from "styled-components";

export const InputBlock = styled.div`
  margin: 2rem 0;
  width: 100%;
  height: 46px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.05);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 16px;
  border: none;
  font-size: 1.6rem;
  line-height: normal;
  background-color: transparent;
  color: var(--color-input-text);
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
`;

export const ErrorBlock = styled.div`
  position: absolute;
  color: var(--color-error);
  font-size: 1.2rem;
`;

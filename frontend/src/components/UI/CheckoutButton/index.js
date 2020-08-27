import React from "react";
import * as S from "./styles.js";

const CheckoutButton = ({ reset, name, label, onClickHandler, ...rest }) => {
  if (reset) {
    return (
      <S.ResetCheckoutButton name={name} onClick={onClickHandler} {...rest}>
        {label}
      </S.ResetCheckoutButton>
    );
  } else {
    return (
      <S.CheckoutButton name={name} onClick={onClickHandler} {...rest}>
        {label}
      </S.CheckoutButton>
    );
  }
};

export default CheckoutButton;

import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const CheckoutButton = ({
  reset = false,
  name,
  label,
  onClickHandler,
  ...rest
}) => {
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

CheckoutButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckoutButton;

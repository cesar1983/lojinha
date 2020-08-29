import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const SlimButton = ({ name, label, onClickHandler, ...rest }) => {
  return (
    <S.SlimButton name={name} onClick={onClickHandler} {...rest}>
      {label}
    </S.SlimButton>
  );
};

SlimButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SlimButton;

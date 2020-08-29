import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const HeaderButton = ({ name, label, onClickHandler, ...rest }) => {
  return (
    <S.Button name={name} onClick={onClickHandler} {...rest}>
      {label}
    </S.Button>
  );
};
HeaderButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default HeaderButton;

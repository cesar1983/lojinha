import React from "react";
import * as S from "./styles.js";

const HeaderButton = ({ name, label, onClickHandler, ...rest }) => {
  return (
    <S.Button name={name} onClick={onClickHandler} {...rest}>
      {label}
    </S.Button>
  );
};

export default HeaderButton;

import React from "react";
import * as S from "./styles.js";

const SlimButton = ({ name, label, onClickHandler, ...rest }) => {
  return (
    <S.SlimButton name={name} onClick={onClickHandler} {...rest}>
      {label}
    </S.SlimButton>
  );
};

export default SlimButton;

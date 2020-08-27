import React from "react";
import * as S from "./styles.js";

const SlimButton = ({ name, label, onClickHandler }) => {
  return (
    <S.SlimButton name={name} onClick={onClickHandler}>
      {label}
    </S.SlimButton>
  );
};

export default SlimButton;

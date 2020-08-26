import React from "react";
import * as S from "./styles.js";

const SlimButton = ({ name, label }) => {
  return <S.SlimButton name={name}>{label}</S.SlimButton>;
};

export default SlimButton;

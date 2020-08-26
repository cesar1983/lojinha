import React from "react";
import * as S from "./styles.js";

const Button = ({ name, label }) => {
  return <S.Button name={name}>{label}</S.Button>;
};

export default Button;

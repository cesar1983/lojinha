import React from "react";
import * as S from "./styles.js";

const TextInput = (props) => {
  let errorTag = "";
  if (props.touched && props.invalid && props.shouldBeValidated) {
    if (props.validationError) {
      errorTag = <S.ErrorBlock>{props.validationError}</S.ErrorBlock>;
    }
  }

  return (
    <S.InputBlock>
      <S.InputLabel>{props.label}</S.InputLabel>
      <S.Input
        type={props.type}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig}
      />
      {errorTag}
    </S.InputBlock>
  );
};

export default TextInput;

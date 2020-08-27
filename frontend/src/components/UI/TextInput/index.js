import React from "react";
import PropTypes from "prop-types";
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
      <S.Input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig}
      />
      {errorTag}
    </S.InputBlock>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  changed: PropTypes.func,
  shouldBeValidated: PropTypes.object,
  invalid: PropTypes.bool,
  touched: PropTypes.bool,
  elementConfig: PropTypes.object,
};

export default TextInput;

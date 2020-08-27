import React, { useContext, useMemo } from "react";

import { CartContext } from "../../../contexts/CartContext.js";
import TextInput from "../../UI/TextInput/index.js";

import * as S from "./styles.js";
import useForm from "../../../hooks/useForm.js";

const Checkout = (props) => {
  const { orderItems } = useContext(CartContext);

  const initialFormControlState = {
    name: {
      type: "text",
      label: "Nome",
      value: "",
      elementConfig: {
        placeholder: "Nome",
      },
      validation: {
        required: true,
        minLength: 2,
      },
      valid: false,
      validationError: "Preencha um nome válido",
      touched: false,
    },
    email: {
      type: "text",
      label: "E-mail",
      value: "",
      elementConfig: {
        placeholder: "E-mail",
      },
      validation: {
        required: false,
        email: true,
      },
      valid: true,
      validationError: "Preencha um e-mail válido",
      touched: false,
    },
    phone: {
      type: "text",
      label: "Telefone",
      value: "",
      elementConfig: {
        placeholder: "Telefone",
      },
      validation: {},
      valid: true,
      validationError: "",
      touched: false,
    },
  };

  const {
    isValid,
    changeHandler,
    formControls,
    setFormControls,
    resetForm,
    formElementsArray,
  } = useForm(initialFormControlState);

  let formElements = formElementsArray.map((element) => {
    return (
      <TextInput
        key={element.id}
        type={element.config.type}
        label={element.config.label}
        elementConfig={element.config.elementConfig}
        shouldBeValidated={element.config.validation}
        invalid={!element.config.valid}
        touched={element.config.touched}
        validationError={element.config.validationError}
        value={element.config.value}
        changed={(event) => changeHandler(event, element.id)}
      />
    );
  });

  const registerHandler = (event) => {
    event.preventDefault();

    const formData = { orderItems: orderItems };
    for (let formElementIdenfitifer in formControls) {
      formData[formElementIdenfitifer] =
        formControls[formElementIdenfitifer].value;
    }

    // API CALL
  };

  return (
    <S.CheckoutWrapper>
      <h2>Checkout</h2>

      <form className="form" autoComplete="on" onSubmit={registerHandler}>
        {formElements}
      </form>

      <div>
        <button type="reset" className="btn btn-light" onClick={resetForm}>
          Cancelar
        </button>
        <button
          type="submit"
          className="btn btn-primary ml-2"
          disabled={!isValid}
        >
          Processar
        </button>
      </div>
    </S.CheckoutWrapper>
  );
};

export default Checkout;

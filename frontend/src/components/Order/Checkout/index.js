import React, { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext.js";
import TextInput from "../../UI/TextInput/index.js";

import useForm from "../../../hooks/useForm.js";
import CheckoutButton from "../../UI/CheckoutButton";

import * as S from "./styles.js";

const Checkout = () => {
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
        id={element.id}
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

  const processHandler = (event) => {
    event.preventDefault();
    alert("processHandler");

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

      <S.Form className="form" autoComplete="on" onSubmit={processHandler}>
        {formElements}

        <CheckoutButton
          label="Processar"
          name="process"
          type="submit"
          disabled={!isValid}
        />

        <CheckoutButton
          reset={true}
          label="Cancelar"
          name="reset"
          type="reset"
          onClick={resetForm}
        />
      </S.Form>
    </S.CheckoutWrapper>
  );
};

export default Checkout;

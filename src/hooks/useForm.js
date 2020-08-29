import { useState } from "react";

function useForm(initialFormControlState) {
  const [formControls, setFormControls] = useState(initialFormControlState);
  const [isValid, setIsValid] = useState(false);

  function changeHandler(event, elementId) {
    const { value } = event.target;

    const modifiedForm = {
      ...formControls,
    };

    const modifiedFormElement = { ...modifiedForm[elementId] };

    modifiedFormElement.value = value;
    modifiedFormElement.valid = checkValidity(
      modifiedFormElement.value,
      modifiedFormElement.validation
    );
    modifiedFormElement.touched = true;
    modifiedForm[elementId] = modifiedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in modifiedForm) {
      formIsValid = modifiedForm[inputIdentifier].valid && formIsValid;
    }

    setFormControls(modifiedForm);
    setIsValid(formIsValid);
  }

  function checkValidity(value, rules) {
    let isValid = true;
    const trimedValue = value.trim();

    if (rules.required) {
      isValid = trimedValue !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = trimedValue.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = trimedValue.length <= rules.maxLength && isValid;
    }
    if (rules.numeric) {
      const regexp = new RegExp(`^-?[0-9]*$`);
      isValid = regexp.test(trimedValue) && trimedValue + 0 > 0 && isValid;
    }
    if (rules.email) {
      const regexp = new RegExp(
        "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"
      );
      isValid = regexp.test(trimedValue) && isValid;
    }
    if (!rules.required && trimedValue === "") {
      isValid = true;
    }

    return isValid;
  }

  function resetForm() {
    setFormControls(initialFormControlState);
  }

  const formElementsArray = [];
  for (let key in formControls) {
    formElementsArray.push({
      id: key,
      config: formControls[key],
    });
  }

  return {
    isValid,
    changeHandler,
    formControls,
    formElementsArray,
    resetForm,
    setFormControls,
  };
}

export default useForm;

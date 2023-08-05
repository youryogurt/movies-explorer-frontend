import React, { useState, useCallback } from "react";

function useFormValidation() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  }
  
  function resetForm() {
    setFormValues({
      name: '',
      email: '',
      password: '',
    });
    setErrors({});
    setIsValid(false);
  }

  return { formValues, errors, isValid, handleChange };
}

export default useFormValidation;
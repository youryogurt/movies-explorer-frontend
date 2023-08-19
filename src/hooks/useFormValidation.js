import {useState, useCallback} from 'react';

function useValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
        setTouched(true);
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    const setError = (name, message) => {
        setErrors({...errors, [name]: message});
    };

    return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setError, touched, setTouched};
}

export default useValidation;
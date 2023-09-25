import { useState } from "react";

const useInput = (validationFunc) =>{
<<<<<<< HEAD
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validationFunc(value)
    const valueHasError = !valueIsValid && isTouched

    const valueChangeHandler = (e) =>{
        setValue(e.target.value)
=======
    
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValid = validationFunc(enteredValue)
    const hasError = !isValid && isTouched

    const valueChangeHandler = (e) =>{
        setEnteredValue(e.target.value)
>>>>>>> 7920d8a5d954c539e0cafbea0e3d2e3c1dd48073
    }

    const inputBlurHandler = () =>{
        setIsTouched(true)
    }

    const reset = () =>{
<<<<<<< HEAD
        setValue('')
=======
        setEnteredValue('')
>>>>>>> 7920d8a5d954c539e0cafbea0e3d2e3c1dd48073
        setIsTouched(false)
    }

    return {
<<<<<<< HEAD
        value,
        valueIsValid,
        valueHasError,
=======
        enteredValue,
        isValid,
        hasError,
>>>>>>> 7920d8a5d954c539e0cafbea0e3d2e3c1dd48073
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

<<<<<<< HEAD
export default useInput
=======
export default useInput

>>>>>>> 7920d8a5d954c539e0cafbea0e3d2e3c1dd48073

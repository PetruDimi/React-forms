import { useState } from "react";

const useInput = (validationFunc) =>{
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validationFunc(value)
    const valueHasError = !valueIsValid && isTouched

    const valueChangeHandler = (e) =>{
        setValue(e.target.value)
    }

    const inputBlurHandler = () =>{
        setIsTouched(true)
    }

    const reset = () =>{
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value,
        valueIsValid,
        valueHasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput



import { useState } from "react";

const useInput = (validationFunc) =>{
    
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValid = validationFunc(enteredValue)
    const hasError = !isValid && isTouched

    const valueChangeHandler = (e) =>{
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = () =>{
        setIsTouched(true)
    }

    const reset = () =>{
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput


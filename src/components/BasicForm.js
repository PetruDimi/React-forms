import useInput from "../hooks/useInput";

const BasicForm = () => {
  const {
    value: fName,
    valueIsValid: fNameIsValid,
    valueHasError: fNameIsInvalid,
    valueChangeHandler: fNameChange,
    inputBlurHandler: fNameBlur,
    reset: resetFName,
  } = useInput((value) => value !== "");

  const {
    value: lName,
    valueIsValid: lNameIsValid,
    valueHasError: lNameIsInvalid,
    valueChangeHandler: lNameChange,
    inputBlurHandler: lNameBlur,
    reset: resetLName,
  } = useInput((value) => value !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    valueHasError: emailIsInvalid,
    valueChangeHandler: emailChange,
    inputBlurHandler: emailBlurr,
    reset: resetEmail,
  } = useInput(
    (value) => value.includes("@") && value.includes(".") && value.length > 6
  );

  const fNameClasses = fNameIsInvalid ? "form-control invalid" : "form-control";
  const lNameClasses = lNameIsInvalid ? "form-control invalid" : "form-control";
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  const formSubmit = (e) => {
    e.resetDefault();
    if (!fNameIsValid && !lNameIsValid && !emailIsValid) {
      return;
    }
    resetFName();
    resetLName();
    resetEmail();
  };

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            onChange={fNameChange}
            onBlur={fNameBlur}
            value={fName}
          />
          {fNameIsInvalid && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={lNameChange}
            onBlur={lNameBlur}
            value={lName}
          />
          {lNameIsInvalid && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChange}
          onBlur={emailBlurr}
          value={email}
        />
        {emailIsInvalid && (
          <p className="error-text">
            Email must contain an '@' symbol, a '.' symbol and ,ust be at least
            6 characters long
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      {!formIsValid && <p className="note">Note: All inputs must be valid so that the form can be submited</p>}
    </form>
  );
};

export default BasicForm;

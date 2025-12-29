import React, { useReducer } from "react";
import MultiStepForm from "./MutliStepReducer";
export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, values, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_FIELD,
      field: e.target.name,
      values: e.target.value,
    });
  };
  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted</h2>
        <pre>{JSON.stringify(values, null, 2)}</pre>
        <button onClick={() => dispatch({ type: ACTIONS.RESET_FORM })}>
          RESET
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>Step {step}/3</h3>
      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </>
      )}
      {step === 2 && (
        <>
          <input
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </>
      )}
      {step === 3 && (
        <>
          <h4>Review</h4>
          <pre>{JSON.stringly(values, null, 2)}</pre>
        </>
      )}
      <div style={{ marginTop: 16 }}>
        {step > 1 && (
          <button onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}>
            BACK
          </button>
        )}
        {step < 3 && (
          <button onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}>
            NEXT
          </button>
        )}
        {step === 3 && (
          <button onClick={() => dispatch({ type: ACTIONS.SUBMIT_STEP })}>
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
}

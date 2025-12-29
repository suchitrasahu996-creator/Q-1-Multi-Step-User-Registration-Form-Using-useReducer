import React from "react";
const initialState = {
  step: 1,
  values: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  error: {},
  isSubmitted: false,
};
const ACTIONS = {
  UPDATE_FIELD: "UPDATED_FIELD",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SUBMIT_FORM: "SUMBIT_FORM",
  RESET_FORM: "RESET_FORM",
};

function MutliStepReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case ACTIONS.NEXT_STEP:
      return {
        ...state,
        step: Math.min(state.step + 1, 3),
      };
    case ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        step: Math.max(state.step - 1, 1),
      };
    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        isSubmitted: true,
      };
    case ACTIONS.RESET_FORM:
      return initialState;

    default:
      return state;
  };
}

export default MutliStepReducer;

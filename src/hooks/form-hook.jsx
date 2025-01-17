import { useCallback, useReducer, useState } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (let inputId in state.inputs) {
        if (state.inputs[inputId] === undefined) {
          /*check for empty shits cuz it makes the form true on single inputs */
          /*solution is to === undefined not if its falsy !state.inputs.[inputId] */
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: {
          ...state.inputs,
          ...action.inputs,
        },
        isValid: action.validity,
      };
    default:
      return state;
  }
};
export const useForm = (initialInputs, initialValidity) => {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState({
    0: "Personal Info",
    1: "Work Info",
    2: "Review",
  });
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value: value,
      isValid: isValid,
    });
  }, []);

  const SetData = useCallback((newInputs, newValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: newInputs,
      validity: newValidity,
    });
  }, []);

  return { formState, inputHandler, SetData, page, setPage, title, setTitle };
};

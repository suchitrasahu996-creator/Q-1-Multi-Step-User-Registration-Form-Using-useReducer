import React, { useReducer } from 'react'
import MultiStepForm from "./MutliStepReducer";
 export default function MultiStepForm() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const {step,values,isSubmitted}=state;

    const handleChange =(e)=>{
        dispatch ({
            type:ACTIONS.UPDATE_FIELD,
            field: e.target.name,
            values: e.target.value,
        });
    };
    if (isSubmitted){
        return(
            <div>
                <h2>Form Submitted</h2>
                <pre>{JSON.stringify(values,null,2)}</pre>
                <button onClick={()=>dispatch({type:ACTIONS.RESET_FORM})}>RESET</button>

            </div>
        );

    }


  return (
    <div>
      <h3>Step {step}/3</h3>
    </div>
  )
}

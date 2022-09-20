import React, { useCallback, useContext } from 'react';
import { TuringMachineContext, TuringMachineContextType } from '../../context';
import { nextStep } from '../../utils';


export const ActionButtons = () => {

  const context = useContext<TuringMachineContextType>(TuringMachineContext) || [];
  const handleNextStepClick = useCallback(
    () => {
      nextStep(context);
      // console.log(e.target);
    },
    [],
  );

  return (
    <div className="App">
      <button onClick={handleNextStepClick}>Next Step</button>
        ActionButtons
    </div>
  );
}
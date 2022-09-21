import React, { useCallback } from 'react';
import { TuringMachineContext } from '../../context';
import { useTMContext } from '../../hooks/useTMContext';
import { nextStep } from '../../utils';


export const ActionButtons = () => {

  // const context = useContext<TuringMachineContextType>(TuringMachineContext) || [];
  const context = useTMContext(TuringMachineContext);
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
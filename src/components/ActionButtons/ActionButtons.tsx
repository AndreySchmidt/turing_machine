import React, { useCallback } from 'react';
import { useTMContext } from '../../hooks/useTMContext';
import { nextStep } from '../../utils';


export const ActionButtons = () => {

  const context = useTMContext();
  const handleNextStepClick = useCallback(
    () => {
      nextStep(context);
      // console.log(e.target);
    },
    [context],
  );

  return (
    <div className="App">
      <button onClick={handleNextStepClick}>Next Step</button>
    </div>
  );
}
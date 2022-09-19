import React, { useContext } from 'react';
import { TuringMachineContext, TuringMachineContextType } from '../../context';

export const OutputLine = () => {

  const context = useContext<TuringMachineContextType>(TuringMachineContext) || [];
  const [ state ] = context;// const state = context[0];


  return (
    <div className="App">
        OutputLine
        { state?.word?.join('') }
    </div>
  );
}
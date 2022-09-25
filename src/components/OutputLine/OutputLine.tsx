import React, { useContext } from 'react';
import { TuringMachineContext } from '../../context';
import { useTMContext } from '../../hooks/useTMContext';

export const OutputLine = () => {

  const context = useTMContext();
  const [ state ] = context;// const state = context[0];


  return (
    <div className="App">
        OutputLine
        { state?.word?.join('') }
    </div>
  );
}
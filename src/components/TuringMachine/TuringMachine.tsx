import React from 'react';
import { ActionButtons } from '../ActionButtons';
import { AlgorithmTable } from '../AlgorithmTable';
import { Alphabet } from '../Alphabet';
import { AlphabetAlgorithm } from '../AlphabetAlgorithm';
import { OutputLine } from '../OutputLine';
import { Tape } from '../Tape';

export const TuringMachine = () => {
  return (
    <div className="App">
      TuringMachine
      <ActionButtons />
      <Alphabet />
      <AlphabetAlgorithm />
      <Tape />
      <AlgorithmTable />
      <OutputLine />
    </div>
  );
}
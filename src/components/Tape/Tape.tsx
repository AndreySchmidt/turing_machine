import React from 'react';
import { Carriage } from '../Carriage';
import { TapeCell } from '../TapeCell';

export const Tape = () => {
  return (
    <div className="App">
      Tape
      <TapeCell />
      <TapeCell />
      <TapeCell />
      <TapeCell />
      <Carriage />
    </div>
  );
}
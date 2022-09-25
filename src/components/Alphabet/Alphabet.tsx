import React from 'react';
import { useTMContext } from '../../hooks/useTMContext';

export const Alphabet = () => {

const [state] = useTMContext();

const arrAlphabet = state?.alphabet && Array.from(state.alphabet);

  return (
    <div className="App">
        {arrAlphabet?.map((letter) => {
          return <span key={letter}>{letter}</span>;
        })}
    </div>
  );
}
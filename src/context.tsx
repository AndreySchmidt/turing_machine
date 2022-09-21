import { useState, createContext, FC, PropsWithChildren, Dispatch } from 'react'
import { word, alphabetAlgorithm, AlphabetType, algorithm } from './preset';
import { alphabetFromWord } from './utils';


export type TuringMachineStateType = {
    word?: AlphabetType;
    alphabet?: Set<string>;
    alphabetAlgorithm?: { readonly RIGHT: "r"; readonly LEFT: "l"; readonly NONE: "n"; readonly STOP: "!"; readonly EMPTY: "λ"; };
    algorithm?: any;
    currentWordIndex?: number;
    currentAlgorithmRow?: string;
};
export type TuringMachineContextType = [state: TuringMachineStateType, setState:Dispatch<TuringMachineStateType>] | [];

export const TuringMachineContext = createContext<TuringMachineContextType>([]);

export const TuringMachineProvider: FC<PropsWithChildren> = ( { children } ) => {
  const alphabet = alphabetFromWord(word);

  const valueToProvide = useState<TuringMachineStateType>(
    { word, alphabet, alphabetAlgorithm, algorithm, currentWordIndex: 0, currentAlgorithmRow: 'q1' }
  );

console.log('1');

  return (
    <TuringMachineContext.Provider value = { valueToProvide }>
      { children }
    </TuringMachineContext.Provider>
  )
}
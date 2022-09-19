import { useState, createContext, FC, PropsWithChildren, Dispatch } from 'react'
import { word, alphabetAlgorithm, AlphabetType } from './preset';
import { alphabetFromWord } from './utils';


export type TuringMachineStateType = {
    word: AlphabetType;
    alphabet: Set<string>;
    alphabetAlgorithm: { readonly RIGHT: "r"; readonly LEFT: "l"; readonly NONE: "n"; readonly STOP: "!"; readonly EMPTY: "λ"; };
};
export type TuringMachineContextType = [state: TuringMachineStateType, setState:Dispatch<TuringMachineStateType>] | null;

export const TuringMachineContext = createContext<TuringMachineContextType>(null);

export const TuringMachineProvider: FC<PropsWithChildren> = ( { children } ) => {
  const alphabet = alphabetFromWord(word);

  const valueToProvide = useState<TuringMachineStateType>(
    { word, alphabet, alphabetAlgorithm }
  );

  return (
    <TuringMachineContext.Provider value = { valueToProvide }>
      { children }
    </TuringMachineContext.Provider>
  )
}
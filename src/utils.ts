import { TuringMachineContextType, TuringMachineStateType } from "./context";
import { AlphabetType, EMPTY_SIMBOL } from "./preset";

import produce from "immer";

export const alphabetFromWord = ( word:AlphabetType ) => {
    const uniq = new Set<string>();
    uniq.add(EMPTY_SIMBOL);

    word.map(
        ( letter ) => { uniq.add(letter) }
    );

    return uniq;
};

export const nextStep = (context: TuringMachineContextType): TuringMachineContextType => {

    // const [state = {currentWordIndex:0}, setState] = context;
    const [state = {}, setState] = context;


    

    const nextState = produce(state, (draft: TuringMachineStateType) => {
        draft.currentWordIndex = 1;
    });

    setState?.(nextState);

    console.log(context, nextState);
    return context;
};
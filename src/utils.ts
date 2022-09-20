import { TuringMachineContextType } from "./context";
import { AlphabetType, EMPTY_SIMBOL } from "./preset";

export const alphabetFromWord = ( word:AlphabetType ) => {
    const uniq = new Set<string>();
    uniq.add(EMPTY_SIMBOL);

    word.map(
        ( letter ) => { uniq.add(letter) }
    );

    return uniq;
};

export const nextStep = (context: TuringMachineContextType): TuringMachineContextType => {
    console.log(context);
    return context;
};
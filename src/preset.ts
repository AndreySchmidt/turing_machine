export const EMPTY_SIMBOL = 'λ';
//type AlphabetType = number[]; //type AlphabetType = Array<number>;
export type AlphabetItemType = string;
// export type AlphabetType = string[];
export type AlphabetType = AlphabetItemType[];
// export const alphabet: AlphabetType = [EMPTY_SIMBOL, '1', '0'];

export const word: AlphabetType = ['1', '0', '1', '1'];


// export type AlphabetAlgorithmType = 'r' | 'l' | 'n' | '!' | 'λ';
// export const alphabetAlgorithm:AlphabetAlgorithmType = 'r, l, n, !, λ';

export const alphabetAlgorithm = {
    RIGHT: 'r',
    LEFT: 'l',
    NONE: 'n',
    STOP: '!',
    EMPTY: EMPTY_SIMBOL
} as const;

export type AlgorithmCellType = {
    replace:AlphabetItemType;
    carriageMove:AlphabetItemType;
    stateAction:AlphabetItemType;
};

export type AlgorithmRowType = Record<string, AlgorithmCellType>;
export type AlgorithmType = Record<string, AlgorithmRowType>;

//TODO
export const algorithm: AlgorithmType = {
    q1: {
        [alphabetAlgorithm.EMPTY]: { replace: alphabetAlgorithm.EMPTY, carriageMove: alphabetAlgorithm.NONE, stateAction: alphabetAlgorithm.STOP },
        '1': { replace: '0', carriageMove: alphabetAlgorithm.RIGHT, stateAction: 'q1' },
        '0': { replace: '1', carriageMove: alphabetAlgorithm.RIGHT, stateAction: 'q1' },
    },
    q2: {},
};
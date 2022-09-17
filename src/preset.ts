//type AlphabetType = number[]; //type AlphabetType = Array<number>;
export type AlphabetType = string[];
export const alphabet:AlphabetType = ['1', '0'];

// export type AlphabetAlgorithmType = 'r' | 'l' | 'n' | '!' | 'λ';
// export const alphabetAlgorithm:AlphabetAlgorithmType = 'r, l, n, !, λ';

export const alphabetAlgorithm = {
    RIGHT : 'r',
    LEFT: 'l',
    NONE: 'n',
    STOP: '!',
    EMPTY: 'λ'
} as const;
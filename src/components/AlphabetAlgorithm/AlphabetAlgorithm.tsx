import React from 'react';
import { useTMContext } from '../../hooks/useTMContext';
import { algorithm, AlgorithmRowType } from '../../preset';


//({objAlphabetAlgorithmRow Это значение деструктуризацией}:{ а это тип строки objAlphabetAlgorithmRow:AlgorithmRowType это всё тип})
const AlphabetAlgorithmRow = ({objAlphabetAlgorithmRow, rowKey}:{objAlphabetAlgorithmRow:AlgorithmRowType, rowKey:string}) => {
  
    return (
      <tr>
        <td>
          {rowKey}
        </td>
        <td>
          Row
        </td>
      </tr>
    );
  }


export const AlphabetAlgorithm = () => {

const [state] = useTMContext();
const objAlphabetAlgorithm = Object.entries<AlgorithmRowType>(state?.algorithm);


  return (
    <table>
        {objAlphabetAlgorithm.map(([key, value]) => {
          // return <span key={key}>{key}</span>;
          return <AlphabetAlgorithmRow key={key} rowKey={key} objAlphabetAlgorithmRow={value} />;
        })}
    </table>
  );
}
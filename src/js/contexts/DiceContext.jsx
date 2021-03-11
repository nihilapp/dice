import React, { createContext, useReducer } from 'react';
import Dicereduser from '../reducers/Dicereducer';

export const DiceContext = createContext();

const initialState = [{
  TotalDice: '다이스를 굴리세요.',
  dicedetails: [],
}];

const suffixs = ['D2', 'D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100', '3D6'];

const DiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Dicereduser, initialState);

  return (
    <DiceContext.Provider value={{state, dispatch, suffixs}}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;
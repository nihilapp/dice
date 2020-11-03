import React, { createContext, useReducer } from 'react';
import Dicereduser from '../reducers/Dicereducer';

export const DiceContext = createContext();

const initialState = [{
  TotalDice: '다이스를 굴리세요.',
  dicedetails: [],
}];

const suffixs = ['2', '4', '6', '8', '10', '12', '20', '100'];

const DiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Dicereduser, initialState);

  return (
    <DiceContext.Provider value={{state, dispatch, suffixs}}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;
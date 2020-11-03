import React, { useCallback, useContext } from 'react';
import { DiceContext } from '../contexts/DiceContext';
import { ROLL_DICE } from '../reducers/Dicereducer';

const TopDiceBox = () => {
  const { dispatch, suffixs } = useContext(DiceContext);

  const onClickRollDices = useCallback((e) => {
    dispatch({
      type: ROLL_DICE,
      value: e.target.value,
    });
  }, []);

  return (
    <div id='topdicebox'>
      {suffixs.map((suffix) => (
        <button key={`D${suffix}`} className='topdices' value={`D${suffix}`} onClick={onClickRollDices}>D{suffix}</button>
      ))}
    </div>
  );
};

export default TopDiceBox;
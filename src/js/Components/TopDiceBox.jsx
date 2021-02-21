import React, { useCallback, useContext, useRef } from 'react';
import { DiceContext } from '../contexts/DiceContext';
import { ROLL_DICE } from '../reducers/Dicereducer';

const TopDiceBox = () => {
  const { dispatch, suffixs } = useContext(DiceContext);
  const selectRef = useRef(null);

  const onClickRollDices = useCallback(() => {
    dispatch({
      type: ROLL_DICE,
      value: selectRef.current.value,
    });
  }, []);

  return (
    <div id='topdicebox'>
      <select id='top-button-select' name='button-roll' ref={selectRef} defaultValue='none'>
        <option value='none' disabled>다이스 프리셋 리스트</option>
        {suffixs.map((suffix) => (
          <option key={`D${suffix}`} value={`D${suffix}`}>D{suffix}</option>
        ))}
        <option value='3D6'>3D6</option>
      </select>
      <button onClick={onClickRollDices}>굴리기</button>
    </div>
  );
};

export default TopDiceBox;
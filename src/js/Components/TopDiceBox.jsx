import React, { useCallback, useContext, useRef } from 'react';
import { DiceContext } from '../contexts/DiceContext';
import { ROLL_DICE } from '../reducers/Dicereducer';
import { v4 as uuid } from 'uuid';

const TopDiceBox = () => {
  const { dispatch, suffixs } = useContext(DiceContext);
  const DefaultSelectRef = useRef(null);

  const onClickRollDices = useCallback(() => {
    dispatch({
      type: ROLL_DICE,
      value: DefaultSelectRef.current.value,
    });
  }, []);

  return (
    <div id='topdicebox'>
      <select id='top-button-select' name='button-roll' ref={DefaultSelectRef} defaultValue='none'>
        <option value='none' disabled>기본 다이스 리스트</option>
        {suffixs.map((suffix) => (
          <option key={suffix} value={suffix}>{suffix}</option>
        ))}
      </select>
      <button onClick={onClickRollDices}>굴리기</button>
    </div>
  );
};

export default TopDiceBox;
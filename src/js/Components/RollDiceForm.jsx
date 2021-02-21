import React, { useCallback, useContext, useRef, useState } from 'react';
import { DiceContext } from '../contexts/DiceContext';
import { RESET_FORM, ROLL_DICE } from '../reducers/Dicereducer';
import HelpModal from './HelpModal';

const RollDiceForm = () => {
  const { dispatch } = useContext(DiceContext);

  const [values, setValues] = useState('');
  const inputRef = useRef(null);

  const onChangeInputDice = (e) => {
    setValues(e.target.value);
  };

  const onSubmitRollDice = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: ROLL_DICE,
      value: values,
    });

    inputRef.current.focus();
  }, [values]);

  const onClickClearDice = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: RESET_FORM,
    });

    setValues('');
    document.getElementById('top-button-select').value = 'none';
    inputRef.current.focus();
  }, []);

  const onInputDice = useCallback((e) => {
    e.target.value = e.target.value.replace(/[^ㅇd0-9-+ ]/gi, '');
  }, []);

  return (
    <>
      <form id='diceform' onSubmit={onSubmitRollDice}>
        <input
          type='text'
          placeholder='[nDn(필수)]+[nDn/n(선택)]'
          value={values} ref={inputRef}
          onChange={onChangeInputDice}
          onInput={onInputDice}
          required
        />
        <select name='rollType' id='rollType' defaultValue='normal'>
          <option value='normal'>랜덤</option>
          <option value='maximum'>최대값</option>
          <option value='minimum'>최소값</option>
        </select>
        <button type='submit'>굴리기</button>
        <button className='cleardice' onClick={onClickClearDice}>초기화</button>
      </form>
      <HelpModal />
    </>
  );
};

RollDiceForm.displayName = 'RollDiceForm';

export default RollDiceForm;
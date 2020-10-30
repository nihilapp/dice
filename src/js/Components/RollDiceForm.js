import React, { useState, useRef, useCallback, memo } from 'react';
import { randomString } from './randomString';

const RollDiceForm = memo(({setResults, id, setId}) => {
  const [values, setValues] = useState('');

  const inputRef = useRef(null);

  const onChangeInputDice = (e) => {
    setValues(e.target.value);
  };

  let newValue;
  let Dstr;
  let dicebox = [];
  let spanboxArray = [];
  let spanbox = [];
  let roll;
  let classname;
  let rolldicedetails = [];
  let rollspan;
  let rolldetail;
  let suffix;
  let modNumber;
  let Dnum;
  let dices;
  let plus;
  let totalArray = [];

  const onSubmitRollDice = useCallback((e) => {
    e.preventDefault();

    const select = document.getElementById('rollType');
    const value = values.split(' ');
    let dicetotal;
    
    for (let x = 0; x <= value.length - 1; x++) {
      if (value[x].includes('d') || value[x].includes('D')) {
        if (value[x].includes('d')) {
          newValue = value[x].replace('d', 'D');
          Dstr = 'D';
        } else if (value[x].includes('D')) {
          newValue = value[x];
          Dstr = 'D';
        }
      } else {
        setId(id + 1);
        setResults((prevState) => [...prevState, {
          id: id,
          TotalDice: '형식에 맞게 입력해주세요.',
          dicedetails: '',
        }]);
        return;
      }

      Dnum = newValue.indexOf(Dstr);
      dices = Number(newValue.slice(0, Dnum));
      plus = newValue.indexOf('+');

      
      if (plus == -1) {
        suffix = Number(newValue.slice(Dnum + 1, newValue.length));
        modNumber = 0;
      } else {
        suffix = Number(newValue.slice(Dnum + 1, plus));
        modNumber = Number(newValue.slice(plus + 1, newValue.length));
      }

      if (dices == 0) {
        dices = 1;
      }

      for (let i = 0; i < dices; i++) {
        if (select.value == 'maximum') {
          roll = suffix;
        } else if (select.value == 'minimum') {
          roll = 1;
        } else if (select.value == 'normal') {
          roll = Math.ceil(Math.random() * suffix);
        }
        
        if (roll == suffix) {
          classname = 'critical';
        } else if (roll == 1) {
          classname = 'fumble';
        } else {
          classname = 'normal';
        }
        
        rollspan = <span key={`${id}-${i}-${classname}-${roll}`} className={classname}>{roll}</span>;
        
        spanbox.push(rollspan);
        dicebox.push(roll);
      }
      spanboxArray.push(spanbox);

      if (dices == 1) {
        newValue = newValue.slice(Dnum, newValue.length);
      }

      if (modNumber == 0) {
        rolldetail = (
          <div className='rolldetail' key={`${id}-${randomString()}-${newValue}`}>
            <div className='itemdice'><p>{newValue} <i className="fas fa-arrow-circle-right"></i></p></div>
            <div key={`${id}-${randomString()}-${dices}${suffix}${modNumber}`} className='dicedetail'>
              <p>
                {spanboxArray[x]}
              </p>
            </div>
          </div>
        );
      } else {
        rolldetail = (
            <div className='rolldetail' key={`${id}-${randomString()}-${newValue}`}>
              <div className='itemdice'><p>{newValue} <i className="fas fa-arrow-circle-right"></i></p></div>
              <div key={`${id}-${randomString()}-${dices}${suffix}${modNumber}`} className='dicedetail'>
                <p>
                  {spanboxArray[x]}
                  {' + '}
                  {<span className='mod'>{modNumber}</span>}
                </p>
              </div>
            </div>
        );
      }
      
      rolldicedetails.push(rolldetail);

      dicetotal = dicebox.reduce((pre, crr, index, arr) => { return pre + crr; }, 0);
      dicetotal = dicetotal + modNumber;
      totalArray.push(dicetotal);

      spanbox = [];
      dicebox = [];
    }

    totalArray = totalArray.reduce((pre, crr, index, arr) => { return pre + crr; }, 0);

    setId(id + 1);
      if (modNumber == 0) {
        setResults((prevState) => [...prevState, {
          id: id,
          TotalDice: totalArray,
          dicedetails: rolldicedetails,
        }]);
      } else {
        setResults((prevState) => [...prevState, {
          id: id,
          TotalDice: totalArray,
          dicedetails: rolldicedetails,
        }]);
      }

  }, [values, id]);

  const onClickClearDice = useCallback((e) => {
    e.preventDefault();
    setValues('');
    
    setId(1);
    setResults([{
      id: 0,
      TotalDice: '주사위를 굴리세요',
      dicedetails: '',
    }]);
  }, []);

  return (
    <form id='diceform' onSubmit={onSubmitRollDice}>
      <input type='text' placeholder='?d? 혹은 ?D?' value={values} ref={inputRef} onChange={onChangeInputDice} />
      <select name='rollType' id='rollType' defaultValue='normal'>
        <option value='normal'>랜덤</option>
        <option value='maximum'>최대값</option>
        <option value='minimum'>최소값</option>
      </select>
      <button type='submit'>굴리기</button>
      <button className='cleardice' onClick={onClickClearDice}>초기화</button>
    </form>
  );
});

RollDiceForm.displayName = 'RollDiceForm';

export default RollDiceForm;
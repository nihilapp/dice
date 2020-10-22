import React, { useState, useRef, useCallback } from 'react';
import { randomString } from './randomString';

const RollDiceForm = ({setResults, id, setId}) => {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  const onChangeInputDice = (e) => {
    setValue(e.target.value);
  };

  const onSubmitRollDice = useCallback((e) => {
    e.preventDefault();

    let newValue;
    let dicestring;
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
    let dicestringNumber;
    let dices;
    let plus;
    let totalArray = [];

    const valueArray = value.split(' ');
    let dicetotal;
    
    for (let x = 0; x <= valueArray.length - 1; x++) {
      if (valueArray[x].includes('d') || valueArray[x].includes('D')) {
        if (valueArray[x].includes('d')) {
          newValue = valueArray[x].replace('d', 'D');
          dicestring = 'D';
        } else if (valueArray[x].includes('D')) {
          newValue = valueArray[x];
          dicestring = 'D';
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

      dicestringNumber = newValue.indexOf(dicestring);
      dices = Number(newValue.slice(0, dicestringNumber));
      plus = newValue.indexOf('+');

      
      if (plus == -1) {
        suffix = Number(newValue.slice(dicestringNumber + 1, newValue.length));
        modNumber = 0;
      } else {
        suffix = Number(newValue.slice(dicestringNumber + 1, plus));
        modNumber = Number(newValue.slice(plus + 1, newValue.length));
      }

      if (dices == 0) {
        dices = 1;
      }
  
      for (let i = 0; i < dices; i++) {
        roll = Math.ceil(Math.random() * suffix);
        
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
        newValue = newValue.slice(dicestringNumber, newValue.length);
      }

      if (modNumber == 0) {
        rolldetail = (
          <div className='rolldetail' key={`${id}-${randomString()}-${newValue}`}>
            <div className='itemdice'><p>{newValue} ▶</p></div>
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
              <div className='itemdice'><p>{newValue} ▶</p></div>
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

  }, [value, id]);

  return (
    <form id='diceform' onSubmit={onSubmitRollDice}>
      <input type='text' placeholder='?d? 혹은 ?D?' value={value} ref={inputRef} onChange={onChangeInputDice} />
      <button type='submit'>굴리기</button>
    </form>
  );
};

export default RollDiceForm;
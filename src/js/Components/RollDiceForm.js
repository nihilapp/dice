import React, { useState, useRef, useCallback } from 'react';

const RollDiceForm = ({setResults, id, setId}) => {
  const [value, setValue] = useState('');
  const [mod, setMod] = useState('');

  const inputRef = useRef(null);

  const onChangeInputDice = (e) => {
    setValue(e.target.value);
  };

  const onChangeInputMod = (e) => {
    setMod(e.target.value);
  };

  const onSubmitRollDice = useCallback((e) => {
    e.preventDefault();

    let newValue;
    let dicestring;
    let dicebox = [];
    let spanbox = [];
    let roll;
    let classname;

    // 입력값 변환.
    setId(id + 1);
    if (value.includes('d') || value.includes('D')) {
      if (value.includes('d')) {
        newValue = value.replace('d', 'D');
        dicestring = 'D';
      } else if (value.includes('D')) {
        newValue = value;
        dicestring = 'D';
      }
    } else {
      setResults((prevState) => [...prevState, {
        id: id,
        dicename: '오류',
        TotalDice: '형식에 맞게 입력해주세요.',
        dicedetail: '형식에 맞게 입력해주세요.',
        mod: '',
      }]);
      return;
    }

    // 굴릴 다이스 값 가져오기.
    const dicestringNumber = newValue.indexOf(dicestring);
    let dices = Number(newValue.slice(0, dicestringNumber));
    const suffix = Number(newValue.slice(dicestringNumber + 1, newValue.length));

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
      
      const rollspan = <span key={`${i}-${classname}`} className={classname}>{roll}</span>;

      spanbox.push(rollspan);
      dicebox.push(roll);
    }

    if (dices == 1) {
      newValue = newValue.slice(dicestringNumber, newValue.length);
    }

    const dicetotal = dicebox.reduce((pre, crr, index, arr) => { return pre + crr; }, 0);

    setId(id + 1);
    if (mod == '') {
      setResults((prevState) => [...prevState, {
        id: id,
        dicename: newValue,
        TotalDice: dicetotal,
        dicedetail: spanbox,
        mod: '',
      }]);
    } else {
      setResults((prevState) => [...prevState, {
        id: id,
        dicename: `${newValue}+${mod}`,
        TotalDice: dicetotal + Number(mod),
        dicedetail: spanbox,
        mod: <span className='mod'>{mod}</span>,
      }]);
    }

  }, [value, mod, id]);

  return (
    <form id='diceform' onSubmit={onSubmitRollDice}>
      <input type='text' placeholder='<개수><D 혹은 d><주사위면 수>' value={value} ref={inputRef} onChange={onChangeInputDice} />
      <input type="text" placeholder='더할 값' value={mod} ref={inputRef} onChange={onChangeInputMod} />
      <button type='submit'>굴리기</button>
    </form>
  );
};

export default RollDiceForm;
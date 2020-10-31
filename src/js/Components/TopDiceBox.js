import React, { useCallback } from 'react';
import uuid from 'uuid/v4';

const suffixs = ['2', '4', '6', '8', '10', '12', '20', '100',];

const TopDiceBox = ({ id, setId, setResults }) => {
  const onClickRollDices = useCallback((e) => {
    let classname;

    const dice = e.target.value;
    const diceNumber = Number(dice.replace('D', ''));

    setId(id + 1);
    const totaldice = Math.ceil(Math.random() * diceNumber);

    if (totaldice == 1) {
      classname = 'fumble';
    } else if (totaldice  == diceNumber) {
      classname  = 'critical';
    } else {
      classname  = 'normal';
    }

    const totalspan = <span key={uuid()} className={classname}>{totaldice}</span>;
    const rolldicedetail = (
      <div key={uuid()} className='rolldetail'>
        <div className='itemdice'><p>{dice} <i className="fas fa-arrow-circle-right"></i></p></div>
        <div key={uuid()} className='dicedetail'><p>{totalspan}</p></div>
      </div>
    );

    setResults((prevState) => [...prevState, {
      id: id,
      TotalDice: totaldice,
      dicedetails: [rolldicedetail],
    }]);
  }, [id]);

  return (
    <div id='topdicebox'>
      {suffixs.map((sfx) => (
        <button key={`D${sfx}`} className='topdices' value={`D${sfx}`} onClick={onClickRollDices}>D{sfx}</button>
      ))}
    </div>
  );
};

export default TopDiceBox;
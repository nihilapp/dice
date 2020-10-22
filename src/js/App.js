import React, { useState, useCallback } from 'react';
import RollDiceForm from './Components/RollDiceForm';
import RollDecription from './Components/RollDecription';

const suffixs = ['2', '4', '6', '8', '10', '12', '20', '100',];

const App = () => {
  const [id, setId] = useState(1);
  let classname;

  const [results, setResults] = useState([{
    id: 0,
    TotalDice: '주사위를 굴리세요',
    dicedetails: '',
  }]);

  const onClickRollDices = useCallback((e) => {
    const dice = e.target.value;
    const diceNumber = Number(dice.replace('D', ''));

    setId(id + 1);
    const rolltotaldice = Math.ceil(Math.random() * diceNumber);

    if (rolltotaldice == 1) {
      classname = 'fumble';
    } else if (rolltotaldice  == diceNumber) {
      classname  = 'critical';
    } else {
      classname  = 'normal';
    }

    const rolltotalspan = <span key={`${id}-${rolltotaldice}`} className={classname}>{rolltotaldice}</span>;
    const rolldicedetail = (
      <div key={`${id}`} className='rolldetail'>
        <div className='itemdice'><p>{dice} ▶</p></div>
        <div key={`${id}-${dice}-${rolltotaldice}`} className='dicedetail'><p>{rolltotalspan}</p></div>
      </div>
    );

    setResults((prevState) => [...prevState, {
      id: id,
      TotalDice: rolltotaldice,
      dicedetails: [rolldicedetail],
    }]);
  }, [id]);

  return (
    <>
      <div id='topdicebox'>
        {suffixs.map((sfx) => (
          <button key={`${results.id}-${sfx}`} className='topdices' value={`D${sfx}`} onClick={onClickRollDices}>D{sfx}</button>
        ))}
      </div>
      <RollDecription />
      <RollDiceForm setResults={setResults} id={id} setId={setId} />
      <div id='diceresultlist'>
        {results.slice().reverse().map((resultList) => (
          <div key={`${resultList.id}-${resultList.TotalDice}`} className='diceresultitem'>
            <div className='itemcontent'>
              <div className='contenttitle'>
                <div className='itemnumber'><p>{resultList.id}.</p></div>
                <div className='totaldice'><p>{resultList.TotalDice}</p></div>
              </div>
              <div className='itemdetail'>
                <div className='dicedetails'>{resultList.dicedetails}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
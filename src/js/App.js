import React, { useState, useCallback } from 'react';
import RollDiceForm from './Components/RollDiceForm';

const suffixs = ['2', '4', '6', '8', '10', '12', '20', '100',];

const App = () => {
  const [id, setId] = useState(1);
  let classname;

  const [results, setResults] = useState([{
    id: 0,
    dicename: '-',
    TotalDice: '주사위를 굴리세요',
    dicedetail: ['주사위를 굴리세요'],
    mod: '',
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

    setResults((prevState) => [...prevState, {
      id: id,
      dicename: dice,
      TotalDice: rolltotaldice,
      dicedetail: [rolltotalspan],
      mod: '',
    }]);
  }, [id]);

  return (
    <>
      {/* 기본적인 주사위 */}
      <div id='topdicebox'>
        {suffixs.map((sfx) => (
          <button key={`${results.id}-${sfx}`} className='topdices' value={`D${sfx}`} onClick={onClickRollDices}>D{sfx}</button>
        ))}
      </div>
      {/* 주사위 자율입력 */}
      <RollDiceForm setResults={setResults} id={id} setId={setId} />
      {/* 주사위 결과 리스트(아래에서 위로) */}
      <div id='diceresultlist'>
        {results.slice().reverse().map((resultList) => (
          <div key={`${resultList.id}-${resultList.TotalDice}`} className='diceresultitem'>
            <div className='itemcontent'>
              <div className='itemnumber'><p>{resultList.id}.</p></div>
              <div className='itemdice'><p>{resultList.dicename}</p></div>
              <div className='itemdetail'>
                <div className='totaldice'><p>{resultList.TotalDice}</p></div>
                <div className='dicedetail'><p>{resultList.dicedetail}{
                  resultList.mod == '' ? '' : ' + '
                }{resultList.mod}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 리스트의 각 항목 */}
      {/* 굴린 주사위 / 총합 / 개별값 */}
    </>
  );
};

export default App;
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import RollDiceForm from './Components/RollDiceForm';
import RollDecription from './Components/RollDecription';
import DiceResults from './Components/DiceResults';
import TopDiceBox from './Components/TopDiceBox';

const App = () => {
  const [id, setId] = useState(1);
  const [results, setResults] = useState([{
    id: 0,
    TotalDice: '주사위를 굴리세요',
    dicedetails: '',
  }]);

  return (
    <>
      <TopDiceBox id={id} setId={setId} setResults={setResults} />
      <RollDecription />
      <RollDiceForm setResults={setResults} id={id} setId={setId} />
      <DiceResults results={results} />
    </>
  );
};

App.displayName = 'App';

export default hot(module)(App);
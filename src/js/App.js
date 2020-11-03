import React from 'react';
import DiceResults from './Components/DiceResults';
import RollDiceForm from './Components/RollDiceForm';
import TopDiceBox from './Components/TopDiceBox';
import DiceContextProvider from './contexts/DiceContext';

const App = () => {
  return (
    <DiceContextProvider>
      <div id='diceControl'>
        <TopDiceBox />
        <RollDiceForm />
      </div>
      <div id="resultListBox">
        <DiceResults />
      </div>
    </DiceContextProvider>
  );
};

App.displayName = 'App';

export default App;
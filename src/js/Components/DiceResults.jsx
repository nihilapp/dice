import React, { useContext } from 'react';
import uuid from 'uuid/v4';
import { DiceContext } from '../contexts/DiceContext';

const DiceResults = () => {
  const { state } = useContext(DiceContext);
  
  return (
    <div id='diceresultlist'>
      {state.slice().reverse().map((resultList) => (
        <div key={uuid()} className='diceresultitem'>
          <div className='itemcontent'>
            <div className='contenttitle'>
              <div className='totaldice'><p>{resultList.TotalDice}</p></div>
            </div>
            <div className='itemdetail'>
              <div className='dicedetails'>{resultList.dicedetails}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiceResults;
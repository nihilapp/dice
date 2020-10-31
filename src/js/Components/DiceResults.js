import React from 'react';
import uuid from 'uuid/v4';

const DiceResults = ({ results }) => {
  return (
    <div id='diceresultlist'>
      {results.slice().reverse().map((resultList) => (
        <div key={uuid()} className='diceresultitem'>
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
  );
};

export default DiceResults;
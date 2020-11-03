import React from 'react';
import uuid from 'uuid/v4';

export const DICE_BUTTON = 'DICE_BUTTON';
export const ROLL_DICE = 'ROLL_DICE';
export const SAVE_DICE = 'SAVE_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const RESET_FORM = 'RESET_FORM';

const Dicereduser = (state, action) => {
  switch (action.type) {
    case ROLL_DICE: {
      let newValue;
      let dicebox = [];
      let spanboxArray = [];
      let spanbox = [];
      let roll;
      let classname;
      let rolldicedetails = [];
      let rollspan;
      let rolldetail;
      let totalArray = [];

      const select = document.getElementById('rollType');
      const value = action.value.split(' ');
      let dicetotal;

      while (value.includes('')) {
        if (value.indexOf('') != -1) {
          value.splice(value.indexOf(''), 1);
        } else {
          break;
        }
      }

      if (value.length == 0) {
        return [
          ...state, {
            TotalDice: '올바른 값이 아닙니다.',
            dicedetails: [],
          }
        ];
      }

      for (let x = 0; x <= value.length - 1; x++) {
        if (value[x].includes('d') || value[x].includes('D')) {
          if (value[x].includes('d')) {
            newValue = value[x].replace('d', 'D');
          } else if (value[x].includes('D')) {
            newValue = value[x];
          }
        } else if (value[x].includes('ㅇ')) {
          newValue = value[x].replace('ㅇ', 'D');
        }
        
        const dicesString = /.+(?=d)/i;
        const suffixString = /(?<=d)[0-9.]+/i;
        const plusString = /[+]/g;
        const modString = /(?<=\+)[0-9.]+/g;
        
        const dicesArray = newValue.match(dicesString);
        let dices = dicesArray ? Number(dicesArray[0]) : 0;
        const suffixArray = newValue.match(suffixString);
        let suffix = Number(suffixArray[0]);
        const plusArray = newValue.match(plusString);
        const modArray = newValue.match(modString);
        let modTotal = modArray ? modArray.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0) : 0;

        let plusmod = [];

        if (plusArray != null) {
          for (let pn = 0; 1 > pn; pn++) {
            for (let mn = 0; modArray.length - 1 >= mn; mn++) {
              plusmod.push(` ${plusArray[pn]} `);
              plusmod.push(<span key={uuid()} className='mod'>{modArray[mn]}</span>);
            }
          }
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
          
          rollspan = <span key={uuid()} className={classname}>{roll}</span>;
          
          spanbox.push(rollspan);
          dicebox.push(roll);
        }
        spanboxArray.push(spanbox);
        
        let mod = [];
        let newMod;
        if (dices == 1) {
          if (plusArray != null) {
            for (let pn = 0; 1 > pn; pn++) {
              for (let mn = 0; modArray.length - 1 >= mn; mn++) {
                mod.push(plusArray[pn]);
                mod.push(modArray[mn]);
              }
            }
            newMod = mod.join('');
            newValue = `D${suffix}${newMod}`;
          }
        }
  
        rolldetail = (
          <div className='rolldetail' key={uuid()}>
            <div className='itemdice'><p><i className="fas fa-dice-d20"></i> {newValue}</p></div>
            <div key={uuid()} className='dicedetail'>
              {
                plusArray == null
                ? (
                  <p>{spanboxArray[x]}</p>
                )
                : (
                  <p>{spanboxArray[x]}<br />{plusmod.map(pm => (
                    pm
                  ))}</p>
                )
              }
            </div>
          </div>
        );
        
        rolldicedetails.push(rolldetail);
  
        dicetotal = dicebox.reduce((pre, crr) => { return pre + crr; }, 0);
        dicetotal = dicetotal + modTotal;
        totalArray.push(dicetotal);
  
        spanbox = [];
        dicebox = [];
      }

      totalArray = totalArray.reduce((pre, crr) => { return pre + crr; }, 0);

      return [
        ...state, {
          TotalDice: totalArray,
          dicedetails: rolldicedetails,
        }
      ];
    }
    case RESET_FORM:
      return [{
        TotalDice: '다이스를 굴리세요.',
        dicedetails: [],
      }];
    case SAVE_DICE:
      break;
    case REMOVE_DICE:
      break;
    default:
      return state;
  }
};

export default Dicereduser;
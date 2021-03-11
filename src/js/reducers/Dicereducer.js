import React from 'react';
import { v4 as uuid } from 'uuid';

export const DICE_BUTTON = 'DICE_BUTTON';
export const ROLL_DICE = 'ROLL_DICE';
export const RESET_FORM = 'RESET_FORM';

const Dicereduser = (state, action) => {
  switch (action.type) {
    case ROLL_DICE: {
      let rolldicedetails = [];

      // 값을 분리한다.
      const value = action.value.split(' ');
      
      // 비어있는 원소가 있으면 없애버린다.
      while (value.includes('')) {
        if (value.indexOf('') != -1) {
          value.splice(value.indexOf(''), 1);
        } else {
          break;
        }
      }

      // 배열이 비어있으면 실행하지 않는다.
      if (value.length == 0) {
        const error = (
          <div key={uuid()} className='error'>
            <p className='message'>값이 비었습니다. 도움말을 참고하세요.</p>
          </div>
        );
        return [
          ...state, {
            TotalDice: '에러 1',
            dicedetails: [error],
          }
        ];
      }
      
      // 숫자를 입력하지 않으면 실행하지 않는다.
      if (value.indexOf('d' || 'ㅇ') != -1) {
        if (value.indexOf('1' || '2' || '3' || '4') == -1) {
          const error = (
            <div key={uuid()} className='error'>
              <p className='message'>숫자를 같이 입력하세요.</p>
            </div>
          );
          return [
            ...state, {
              TotalDice: '에러 2',
              dicedetails: [error],
            }
          ];
        } else if (value.indexOf('5' || '6' || '7') == -1) {
          const error = (
            <div key={uuid()} className='error'>
              <p className='message'>숫자를 같이 입력하세요.</p>
            </div>
          );
          return [
            ...state, {
              TotalDice: '에러 2',
              dicedetails: [error],
            }
          ];
        } else if (value.indexOf('8' || '9' || '0') == -1) {
          const error = (
            <div key={uuid()} className='error'>
              <p className='message'>숫자를 같이 입력하세요.</p>
            </div> 
          );
          return [
            ...state, {
              TotalDice: '에러 2',
              dicedetails: [error],
            }
          ];
        }
      }
      
      // D를 두개 적으면 실행하지 않는다.
      if (value.includes('DD' && 'dd')) {
        const error = (
          <div key={uuid()} className='error'>
            <p className='message'>D는 하나만 입력하고 숫자를 입력해야 합니다.</p>
          </div>
        );
        return [
          ...state, {
            TotalDice: '에러 3',
            dicedetails: [error],
          }
        ];
      }

      // 분할한 값들을 처리한다.
      for (let x = 0; x <= value.length - 1; x++) {
        // 더할 값을 정확하게 입력하지 않으면 실행하지 않는다.
        if (value[x].indexOf('+') == value[x].length - 1) {
          const error = (
            <div key={uuid()} className='error'>
              <p className='message'>더할 값을 정확히 입력해야 합니다.</p>
            </div>
          );
          return [
            ...state, {
              TotalDice: '에러 5',
              dicedetails: [error],
            }
          ];
        }

        let newValue;
        let dice;
        let mod;
        let dicebox = [];
        let detailItemArray = [];
        let spanbox = [];
        let roll;
        let classname;
        let rollspan;
        let rolldetail;
        let dicetotal;
        let detailItem;
        let modSpan;
        let modSpanArray = [];
        let modArray = [];
        let modTotal;

        const select = document.getElementById('rollType');

        // 모든 다이스 스트링을 D로 통일한다.
        if (value[x].match(/[dㅇ]/gi) != -1) {
          newValue = value[x].replace(/[dㅇ]/gi, 'D');
        }

        // +로 다시 값을 분리한다.
        const newValues = newValue.split('+');
        
        // 값을 찾기 위한 정규식을 마련한다.
        const dicesString = /\w+(?=[D])/i;
        const suffixString = /(?<=d)[0-9.]+/i;

        while (newValues.includes('')) {
          if (newValues.indexOf('') != -1) {
            newValues.splice(newValues.indexOf(''), 1);
          } else {
            break;
          }
        }

        // +를 두개 이상 입력하면 실행하지 않는다.
        if (newValue.indexOf('++') != - 1) {
          const error = (
            <div key={uuid()} className='error'>
              <p className='message'>+는 하나만 입력하고 숫자를 입력해야 합니다.</p>
            </div>
          );
          return [
            ...state, {
              TotalDice: '에러 6',
              dicedetails: [error],
            }
          ];
        }

        // 추가적으로 분리한 값을 처리한다.
        for (let xx = 0; xx <= newValues.length - 1; xx++) {
          // D의 뒤에 숫자를 입력하지 않으면 실행하지 않는다.
          if (newValues[xx].indexOf('D') == newValues[xx].length - 1) {
            const error = (
              <div key={uuid()} className='error'>
                <p className='message'>D 뒤에 숫자를 입력해야합니다.</p>
              </div>
            );
            return [
              ...state, {
                TotalDice: '에러 4',
                dicedetails: [error],
              }
            ];
          } else if (newValues[xx].indexOf('DD') != - 1) {
            const error = (
              <div key={uuid()} className='error'>
                <p className='message'>D는 하나만 입력하고 숫자를 입력해야 합니다.</p>
              </div>
            );
            return [
              ...state, {
                TotalDice: '에러 3',
                dicedetails: [error],
              }
            ];
          }

          if (newValues[xx].includes('D')) {
            dice = newValues[xx];
            // 값에 D가 포함되어있으면 다이스로 분류.
            const dicesArray = dice.match(dicesString);
            let dices = dicesArray ? Number(dicesArray[0]) : 1;

            const suffixArray = dice.match(suffixString);
            let suffix = Number(suffixArray[0]);

            for (let r = 0; r < dices; r++) {
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
            
            detailItem = (
              <p key={uuid()} className='topItme'>
                <span className='diceName'>
                  {dice}
                </span>
                {spanbox}
              </p>
            );

            detailItemArray.push(detailItem);
            spanbox = [];
          } else if (newValues[xx].includes('-')) {
            // 값에 -가 있으면 패널티 추가값으로 분류.
            mod = Number(newValues[xx]);

            modSpan = (
              <span key={uuid()} className='penaltyMod'>{mod}</span>
            );

            modSpanArray.push(modSpan);
            modArray.push(mod);
          } else if (newValues[xx].includes('none')) {
            const error = (
              <div key={uuid()} className='error'>
                <p className='message'>굴릴 주사위를 선택해야합니다.</p>
              </div>
            );
            return [
              ...state, {
                TotalDice: '에러 7',
                dicedetails: [error],
              }
            ];
          } else {
            // 값에 D가 없으면 추가값으로 분류.
            mod = newValues[xx];

            modSpan = (
              <span key={uuid()} className='bonusMod'>{'+'}{mod}</span>
            );

            modSpanArray.push(modSpan);
            modArray.push(mod);
          }
        }

        dicetotal = dicebox.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0);
        modTotal = modArray ? modArray.reduce((pre, crr) => { return Number(pre) + Number(crr); }, 0) : 0;
        dicetotal = dicetotal + modTotal;

        rolldetail = (
          <div className='rolldetail' key={uuid()}>
            <div className='total'>{dicetotal}</div>
            <div className='itemdice'><p>{newValue}</p></div>
            <div className='dicedetail'>
              <div className='detailTop'>
                {detailItemArray.map(item => (
                  item
                ))}
              </div>
              {modSpanArray.length != 0
                ? (<div className='detailBottom'>
                    <p>
                      {
                        modSpanArray.map(item => {
                          return item;
                        })
                      }
                    </p>
                  </div>)
                : ''
              }
            </div>
          </div>
        );
        
        rolldicedetails.push(rolldetail);
        
        modSpanArray = [];
      }

      return [
        ...state, {
          TotalDice: [],
          dicedetails: rolldicedetails,
        }
      ];
    }
    case RESET_FORM:
      return [{
        TotalDice: '다이스를 굴리세요.',
        dicedetails: [],
      }];
    default:
      return state;
  }
};

export default Dicereduser;
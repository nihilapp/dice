import React from 'react';

const HelpModal = () => {
  return (
    <div id='help'>
      <div className='descBox'>
        <div style={{ flex: '1 1 0' }}></div>
        <p className='helpDesc'>도움말</p>
      </div>
      <input type='checkbox' id='modal'/>
      <label htmlFor='modal' className='fas fa-question-circle modalbutton' />
      <div className='modalLayer'>
        <div className='modalWindow'>
          <div className='modalTop'>
            <div className='modalTitle'>도움말</div>
            <label htmlFor='modal' className='fas fa-times modalclose'></label>
          </div>
          <div className='modalBody'>
            <p className='motelText'>
              <i className='fas fa-chevron-circle-right'></i>
              입력칸 위에 있는 8개의 버튼으로 다이스를 굴릴 수 있습니다.
            </p>
            <p className='motelText'>
              <i className='fas fa-chevron-circle-right'></i>
              입력칸에 <span>다이스 개수</span><span>d/D</span><span>다이스 면수</span>를 입력하고 엔터를 누르거나 굴리기 버튼을 누르면 다이스를 굴릴 수 있습니다. 다이스 개수는 선택입니다. 적지 않으면 자동으로 1개가 굴려집니다.
            </p>
            <p className='motelText'>
              <i className='fas fa-chevron-circle-right'></i>
              <span>다이스 개수</span><span>d/D</span><span>다이스 면수</span>바로 뒤에 <span>+추가값</span>형식으로 값을 입력하면 다이스에 해당 값이 더해집니다. 추가값은 여러번 넣을 수 있습니다.
            </p>
            <p className='motelText'>
              <i className='fas fa-chevron-circle-right'></i>
              서로 다른 여러개의 다이스를 굴릴 수 있습니다. <span>다이스 개수</span><span>d/D</span><span>다이스 면수</span>를 입력하고 한 칸 띄고 원하는 값을 더 입력하면 입력한대로 다이스를 동시에 굴립니다.
            </p>
          </div>
        </div>
        <label htmlFor='modal' className='modalBack'></label>
      </div>
    </div>
  );
};

export default HelpModal;
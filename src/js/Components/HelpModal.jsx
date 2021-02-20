import React from 'react';

const HelpModal = () => {
  return (
    <div id='help'>
      <input type='checkbox' id='modal'/>
      <label htmlFor='modal' className='modalbutton' />
      <div className='modalLayer'>
        <div className='modalWindow'>
          <div className='modalTop'>
            <div className='modalTitle'>도움말</div>
            <label htmlFor='modal' className='modalclose'></label>
          </div>
          <div className='modalBody'>
            <p className='motelText'>
              입력칸 위에 있는 8개의 버튼으로 다이스를 굴릴 수 있습니다.
            </p>
            <p className='motelText'>
              입력칸에 <span>nDn</span>를 입력하고 엔터를 누르거나 굴리기 버튼을 누르면 다이스를 굴릴 수 있습니다. 첫번째 숫자는 개수(선택) 입니다. 두번째 숫자는 면수 입니다.<br /><br />
              {'> '}<span>20D200</span> = 200면체 20개
            </p>
            <p className='motelText'>
              <span>nDn</span> 바로 뒤에 <span>+n</span> 형식으로 값을 입력하면 다이스에 해당 값이 더해집니다. 추가값은 여러번 넣을 수 있습니다. <span>nDn</span> 형식의 다이스도 추가할 수 있습니다.
              <br /><br />
              {'> '}<span>3D6+4+2D16</span>
            </p>
            <p className='motelText'>
              다이스는 +로 이어서 여러번 굴릴 수도 있고 띄어쓰기로 구분해서 굴릴 수도 있습니다.
              <br /><br />
              {'> '}<span>2D6 3D6</span> 혹은 <span>2D6+3D6</span>
            </p>
          </div>
        </div>
        <label htmlFor='modal' className='modalBack'></label>
      </div>
    </div>
  );
};

export default HelpModal;
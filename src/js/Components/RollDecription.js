import React, { memo } from 'react';

const RollDecription = memo(() => {
  return (
    <>
      <p id='decription'>[간단한 사용법.] ①. 8개의 버튼으로 굴릴 수 있다. ②. 아래의 입력칸에 직접 값을 입력해서 굴릴 수 있다. (첫번째 물음표는 주사위의 개수. 두번째 물음표는 주사위의 면 개수.) ③. 주사위 값에 상수를 더하고 싶은 경우 띄어쓰지 않고 [+숫자]를 입력.</p>
    </>
  );
});

RollDecription.displayName = 'RollDecription';

export default RollDecription;
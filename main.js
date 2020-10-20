const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

let win = null;
// 객체는 전역에 존재해야한다.
// app은 앱의 라이프 사이클을 제어한다.

// 기본적인 준비를 마쳤을 때
app.on('will-finish-launching', () => {
  console.log('1. will-finish-launching');
});

// 앱이 시작될 준비가 되었을 때
app.on('ready', () => {
  console.log('2. ready');
  win = new BrowserWindow({
    // 전역에 만들어뒀던 변수를 이용해 새로운 객체를 생성.
    // 앱의 본체가 된다.
    width: 1280,
    height: 720,
    // 크기 지정 가능 백그라운드 색도 지정 가능
    icon: path.join(__dirname, './assets/icons/icon.ico'),
    // 이 아래는 설정.
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('./index.html');
  // win.loadURL('https://www.naver.com')
  // 파일을 불러와서 화면에 로드한다. 주소도 로드할 수 있다.

  // win.webContents.openDevTools();
  win.setMenu(null);
});

// 자동새로고침 기능을 말하는거 같은데 일단 나는 안된다.
if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

// 알림을 만들 수 있다.
ipcMain.on('notify', (_, message) => {
  new Notification({
    title: 'Notification',
    // 알림 이름
    body: message,
    // 알림 내용 다른 문서에서 연결한대로 날아온다.
  }).show();
});

// 모든 윈도우가 종료되었을 때
app.on('window-all-closed', () => {
  console.log('3. window-all-closed');
  app.quit();
  // 앱을 종료
});

// 앱이 종료되며 모든 윈도우를 닫기 전
app.on('before-quit', (event) => {
  console.log('4. before-quit');
});

// 모든 윈도우가 닫히고 앱을 종료하기 전
app.on('will-quit', (event) => {
  console.log('5. will-quit');
});

// 최종적으로 앱이 종료될 때
app.on('quit', (event, exitcode) => {
  console.log(`6. quit ${JSON.stringify(event)} ${exitcode}`);
});
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // 이런식으로 설정해두면 알림 시스템을 만들 수 있다. 응용하면 될 것 같다. 아직은 잘 모르겠다.
  notificationApi: {
    sendNotification(message) {
      console.log(message);
      ipcRenderer.send('notify', message);
    }
  }
});
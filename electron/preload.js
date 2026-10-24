const { contextBridge, ipcRenderer, clipboard } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  copyToClipboard: (text) => {
    clipboard.writeText(text);
  },
  getPlatform: () => process.platform,
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  closeWindow: () => ipcRenderer.send('window-close'),
  panicMute: (isMuted) => ipcRenderer.send('panic-mute', isMuted)
});

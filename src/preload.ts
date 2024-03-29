// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const { windowId } = ipcRenderer.sendSync('get-window-id');
// Define a safe subset of the `ipcRenderer` object
const ipc = {
  send: (channel: any, data: any) => {
    ipcRenderer.send(channel, { windowId, data });
  },
  receive: (channel: any, func: any) => {
    ipcRenderer.on(channel, (_event, ...args) => func(...args));
  },
};
// Expose `ipc` object to the renderer process
contextBridge.exposeInMainWorld('ipc', ipc);

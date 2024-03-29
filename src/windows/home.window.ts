import { BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';
import { mainWindow } from '../main';
const windows: BrowserWindow[] = [];
export function createHomeWindow() {
  if (windows.length > 5) {
    windows[0].show();
    dialog.showMessageBox(windows[0], {
      type: 'error',
      title: 'Open to much windows',
      message: 'Open to much windows',
      buttons: ['OK'],
    });
  }
  const newWindow = new BrowserWindow({
    width: 1440,
    height: 810,
    minWidth: 1280,
    minHeight: 720,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      devTools: true,
      preload: path.join(__dirname, '../preload.js'),
    },
  });
  newWindow.on('closed', () => {
    // Loại bỏ cửa sổ đã đóng khỏi mảng
    const index = windows.indexOf(newWindow);
    if (index !== -1) {
      windows.splice(index, 1);
    }
  });
  newWindow.loadFile(path.join(__dirname, '../../public/index.html'));
  windows.push(newWindow);
}
export function setupHomeWindowIPC() {
  ipcMain.on('open-home-window', (_event, _context) => {
    mainWindow.close();
    createHomeWindow();
  });
  ipcMain.on('new-home-window', (_event, _context) => {
    createHomeWindow();
  });
}

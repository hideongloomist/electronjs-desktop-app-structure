import { BrowserWindow } from 'electron';
import * as path from 'path';
/**
 * @LOGIN
 */
export let loginWindow: BrowserWindow | null;
export function createLoginWindow() {
  if (loginWindow) {
    loginWindow.show();
    return loginWindow;
  }
  loginWindow = new BrowserWindow({
    width: 1008,
    height: 504,
    minWidth: 1008,
    minHeight: 504,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      devTools: false,
      preload: path.join(__dirname, '../preload.js'),
    },
  });
  loginWindow.on('closed', () => {
    loginWindow = null;
  });
  loginWindow.loadFile(path.join(__dirname, '../../public/login.html'));
  // Menu.setApplicationMenu(null);
  return loginWindow;
}

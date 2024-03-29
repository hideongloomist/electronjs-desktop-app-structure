import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import { setupAuthModuleIPC } from './modules';
import { setupHomeWindowIPC } from '@windows/home.window';
import { createLoginWindow } from '@windows/login.window';
import { environment } from 'env.constant';
import AppDataSource from '@shared/database/data-source';
import { setupDialogWindowIPC } from './windows';
console.log(environment.NODE_ENV);
/**
 * @DATA_START
 */
AppDataSource.initialize()
  .then(() => {})
  .catch((error: any) => console.log(error));
/**
 * @LOGIN
 */
export let mainWindow: BrowserWindow | null;
/**
 * @Modules
 */
setupAuthModuleIPC();
/**
 * @Windows
 */
setupHomeWindowIPC();
setupDialogWindowIPC();
/**
 * @APP_START
 */
app.enableSandbox();
// Listen for the app to be ready
app.on('ready', () => {
  // Create the main window
  mainWindow = createLoginWindow();
  // Configure autoUpdater to use private GitHub repository
  autoUpdater.setFeedURL({
    provider: 'github',
    owner: environment.GITHUB_OWNER,
    repo: environment.GITHUB_REPO,
    private: true,
    token: environment.GITHUB_TOKEN,
  });
  // Check for updates when the app is ready
  autoUpdater.checkForUpdatesAndNotify();
});
// Listen for update available
autoUpdater.on('update-available', () => {
  dialog
    .showMessageBox({
      type: 'info',
      title: 'Update Available',
      message: 'A new version of the application is available. Do you want to update now?',
      buttons: ['Update', 'Cancel'],
    })
    .then((response) => {
      if (response.response === 0) {
        // If the user clicked "Update", start downloading the update
        autoUpdater.downloadUpdate();
      } else {
        // If the user clicked "Cancel", open the main window
        mainWindow.show();
      }
    });
});
// Listen for update downloaded
autoUpdater.on('update-downloaded', () => {
  // Prompt the user to quit and install the update
  dialog
    .showMessageBox({
      type: 'info',
      title: 'Update Ready',
      message: 'The update has been downloaded. Restart the application to apply the updates.',
      buttons: ['Restart', 'Later'],
    })
    .then((response) => {
      if (response.response === 0) {
        // If the user clicked "Restart", restart the app
        autoUpdater.quitAndInstall();
      } else {
        // If the user clicked "Later", open the main window
        mainWindow.show();
      }
    });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createLoginWindow();
  }
});
ipcMain.on('get-window-id', (event) => {
  event.returnValue = { windowId: event.sender.id };
});

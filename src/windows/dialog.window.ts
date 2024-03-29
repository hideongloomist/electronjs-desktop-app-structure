import { ipcMain, dialog, BrowserWindow } from 'electron';
export function setupDialogWindowIPC() {
  ipcMain.on(
    'open-dialog',
    async (event, { windowId, data: { type, title, message, buttons } }) => {
      const window = BrowserWindow.fromId(windowId);
      if (window) {
        const result = await dialog.showMessageBox(window, {
          type,
          title,
          message,
          buttons,
        });
      }
    },
  );
}

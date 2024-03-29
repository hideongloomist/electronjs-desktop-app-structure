import AppStorageServiceInstance from '@modules/storage/storage.service';
import { hashSHA256 } from '@shared/helpers/cryption.helper';
import { ipcMain } from 'electron';
export function authenticateUser(username: string, password: string): boolean {
  AppStorageServiceInstance.addStorage('username', `${username}`);
  AppStorageServiceInstance.addStorage('password', `${hashSHA256(password)}`);
  AppStorageServiceInstance.setCache('accessToken', '');
  AppStorageServiceInstance.setCache('refreshToken', '');
  return username === 'admin' && password === 'password';
}
export function setupAuthApiIPC() {
  ipcMain.on(
    'security-api-auth-login-request',
    (event, { windowId, data: { username, password } }) => {
      // Perform login authentication
      const success = authenticateUser(username, password);
      console.log(windowId);
      // Send login response back to renderer process
      event.sender.send('security-api-auth-login-response', success);
    },
  );
}

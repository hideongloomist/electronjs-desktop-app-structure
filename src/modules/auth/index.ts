import { setupAuthApiIPC } from './auth.api';
export * from './auth.api';
export function setupAuthModuleIPC() {
  setupAuthApiIPC();
}

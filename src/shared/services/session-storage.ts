import { StorageItem } from '../interfaces/storage.interface';
export class SessionStorageManager {
  static setItem(item: StorageItem): void {
    sessionStorage.setItem(item.key, item.value);
  }
  static getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }
  static removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
  static clear(): void {
    sessionStorage.clear();
  }
}

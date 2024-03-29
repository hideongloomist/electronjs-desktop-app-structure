import { StorageItem } from '../interfaces/storage.interface';
export class LocalStorageManager {
  static setItem(item: StorageItem): void {
    localStorage.setItem(item.key, item.value);
  }
  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  static clear(): void {
    localStorage.clear();
  }
}

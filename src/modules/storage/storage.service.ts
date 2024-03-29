// repository.ts
import AppDataSource from '@shared/database/data-source';
import { AppStorage } from './storage.entity';
type CacheData<T> = {
  [key: string]: T;
};
class AppStorageService {
  private static instance: AppStorageService;
  private cache: Map<string, string>;
  constructor() {
    this.cache = new Map<string, string>();
  }
  // Method to add an item to the private Map
  async addStorage(key: string, data: string) {
    const value = await AppDataSource.getRepository(AppStorage).findOne({ where: { key: key } });
    if (!value) {
      const appStorage = new AppStorage();
      appStorage.key = key;
      appStorage.value = data;
      await AppDataSource.getRepository(AppStorage).save(appStorage);
    }
    const appStorage = value;
    appStorage.value = data;
    await AppDataSource.getRepository(AppStorage).save(appStorage);
  }
  // Method to get an item from the private Map
  async getStorage(key: string): Promise<string> {
    const value = await AppDataSource.getRepository(AppStorage).findOne({ where: { key: key } });
    return value.value;
  }
  // Method to delete an item from the private Map
  async deleteStorage(key: string) {
    const appStorage = new AppStorage();
    appStorage.key = key;
    AppDataSource.getRepository(AppStorage).delete(appStorage);
  }
  public static getInstance(): AppStorageService {
    if (!AppStorageService.instance) {
      AppStorageService.instance = new AppStorageService();
    }
    return AppStorageService.instance;
  }
  public setCache(key: string, value: string): void {
    this.cache.set(key, value);
  }
  public getCache(key: string): string | undefined {
    return this.cache.get(key);
  }
  public hasCache(key: string): boolean {
    return this.cache.has(key);
  }
  public deleteCache(key: string): void {
    this.cache.delete(key);
  }
  public clearCache(): void {
    this.cache.clear();
  }
}
const AppStorageServiceInstance = AppStorageService.getInstance();
export default AppStorageServiceInstance;

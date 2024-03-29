// repository.ts
import { Repository } from 'typeorm';
import { AppConfig } from './config.entity';
import AppDataSource from '@shared/database/data-source';
class AppConfigService {
  private static instance: AppConfigService;
  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }
    return AppConfigService.instance;
  }
  // Method to add an item to the private Map
  async getConfig() {
    return await AppDataSource.getRepository(AppConfig).findOne({ where: { id: 1 } });
  }
  async updateConfig(newData: Partial<AppConfig>): Promise<AppConfig | null> {
    // Retrieve the entity from the database by its ID
    const existingEntity = await AppDataSource.getRepository(AppConfig).findOne({
      where: { id: 1 },
    });
    if (!existingEntity) {
      return null; // Entity not found, return null or throw an error
    }
    // Update the properties of the retrieved entity with newData
    Object.assign(existingEntity, newData);
    // Save the updated entity back to the database
    const updatedEntity = await AppDataSource.getRepository(AppConfig).save(existingEntity);
    return updatedEntity;
  }
}
const AppConfigServiceInstance = AppConfigService.getInstance();
export default AppConfigServiceInstance;

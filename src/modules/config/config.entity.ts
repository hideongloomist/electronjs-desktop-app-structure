import { DbEncryptionTransformer } from '@shared/database/db-encryption';
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
@Entity('AppConfig')
export class AppConfig {
  @PrimaryColumn({ name: 'id', type: 'int' }) id!: number;
  @Column({
    name: 'api_url',
    length: 256,
    transformer: new EncryptionTransformer(DbEncryptionTransformer('api_url')),
  })
  apiUrl!: string;
  @Column({
    name: 'api_key',
    length: 256,
    transformer: new EncryptionTransformer(DbEncryptionTransformer('api_key')),
  })
  apiKey!: string;
}

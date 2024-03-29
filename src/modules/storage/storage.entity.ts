import { DbEncryptionTransformer } from '@shared/database/db-encryption';
import { EntityBase } from '@shared/database/entity-base';
import { Entity, Column } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
@Entity('AppStorage')
export class AppStorage extends EntityBase {
  @Column({
    name: 'key',
    length: 256,
    type: 'nvarchar',
    unique: true,
  })
  key!: string;
  @Column({
    name: 'value',
    length: 256,
    type: 'nvarchar',
  })
  value!: string;
}

import { PrimaryColumn } from 'typeorm';
export class EntityBase {
  @PrimaryColumn({ name: 'id', type: 'int' }) id!: number;
}

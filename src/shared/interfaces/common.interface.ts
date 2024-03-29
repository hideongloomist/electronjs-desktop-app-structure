import { DIRECTION } from '../constants/common.constant';
export enum ESortType {
  ID = 'id',
  NAME = 'name',
  MULTIPLIER = 'multiplier',
  MIN = 'min',
}
export enum ESortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
export interface IRangeNumber {
  min: number;
  max: number;
}
export interface IPagination {
  page_size: number;
  page_number: number;
  sortBy?: string;
  direction?: DIRECTION;
}
export enum EStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
export enum ETimeUnit {
  SECONDS = 'seconds',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
}

import * as cryptojs from 'crypto-js';
import crypto from 'crypto';
export const encryptRabbit = (input: string, key: string): any => {
  return cryptojs.Rabbit.encrypt(JSON.stringify(input), key).toString();
};
export const decryptRabbit = (input: string, key: string): any => {
  const bytes = cryptojs.Rabbit.decrypt(input, key);
  return JSON.parse(bytes.toString(cryptojs.enc.Utf8));
};
export const hashSHA256 = (input: string): string => {
  return crypto.createHash('sha256').update(input).digest('hex');
};

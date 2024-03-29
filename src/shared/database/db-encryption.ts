// it is recommended to not store encryption keys directly in config files,
import { environment } from 'env.constant';
import { EncryptionOptions } from 'typeorm-encrypted';
// it's better to use an environment variable or to use dotenv in order to load the value
export function DbEncryptionTransformer(customKey: string): EncryptionOptions {
  return {
    key: `${environment.ENCRYPTION_KEY}${customKey}`,
    algorithm: 'aes-256-cbc', // AES encryption with a 256-bit key in CBC mode
    ivLength: 32, // IV length of 16 bytes (128 bits)
    iv: `${environment.ENCRYPTION_IV}${customKey}`, // Optional custom IV
    authTagLength: 32, // Length of the authentication tag (optional)
    looseMatching: false, // Use strict matching during decryption (optional)
  };
}

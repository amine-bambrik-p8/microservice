import { Injectable } from '@nestjs/common';
import { IEncryptionService } from './encryption.service.interface';
import * as argon2 from 'argon2';
@Injectable()
export class EncryptionService implements IEncryptionService {
  async hash(data: string): Promise<string> {
    return await argon2.hash(data);
  }
  async verifyHash(data: string, hash: string): Promise<boolean> {
    return await argon2.verify(hash, data);
  }
}

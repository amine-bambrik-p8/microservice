import { Injectable } from '@nestjs/common';
import { IEncryptionService } from '../../../encryption';

@Injectable()
export class PasswordService {
  constructor(private readonly encryptionService: IEncryptionService) {}
  async hashPassword(password: string): Promise<string> {
    return await this.encryptionService.hash(password);
  }

  async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await this.encryptionService.verifyHash(password, hashedPassword);
  }
}

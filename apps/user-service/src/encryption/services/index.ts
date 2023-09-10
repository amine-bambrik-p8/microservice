import { EncryptionService } from './encryption/encryption.service';
import { IEncryptionService } from './encryption/encryption.service.interface';

export { IEncryptionService } from './encryption/encryption.service.interface';
export const serviceProviders = [
  {
    provide: IEncryptionService,
    useClass: EncryptionService,
  },
];

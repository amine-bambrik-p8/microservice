export abstract class IEncryptionService {
  abstract hash(data: string): Promise<string>;
  abstract verifyHash(data: string, hash: string): Promise<boolean>;
}

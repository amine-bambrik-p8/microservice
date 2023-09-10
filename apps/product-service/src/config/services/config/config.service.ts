import { Injectable } from '@nestjs/common';
import { IConfigService } from './config.service.interface';

@Injectable()
export class ConfigService implements IConfigService {
  static get(key: string): string {
    return process.env[key];
  }
  get(key: string): string {
    return ConfigService.get(key);
  }
}

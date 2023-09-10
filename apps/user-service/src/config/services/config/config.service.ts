import { Injectable } from '@nestjs/common';
import { IConfigService } from './config.service.interface';

@Injectable()
export class ConfigService implements IConfigService {
  get(key: string): string {
    return process.env[key];
  }
}

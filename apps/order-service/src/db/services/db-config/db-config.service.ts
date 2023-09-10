import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../../config/services/config/config.service';

@Injectable()
export class DbConfigService {
  static getDbName(): string {
    return ConfigService.get('DB_NAME');
  }
  static getDbHost(): string {
    return ConfigService.get('DB_HOST');
  }
  static getDbPort(): number {
    return +ConfigService.get('DB_PORT');
  }
  static getDbUsername(): string {
    return ConfigService.get('DB_USERNAME');
  }
  static getDbPassword(): string {
    return ConfigService.get('DB_PASSWORD');
  }
}

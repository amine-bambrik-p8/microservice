import { IAppConfigService } from './app-config.service.interface';
import { IConfigService } from '../../../config/services';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppConfigService implements IAppConfigService {
  constructor(private readonly configService: IConfigService) {}

  getApiPort(): number {
    return Number(this.configService.get('PRODUCT_SERVICE_API_PORT'));
  }

  getApiPrefix(): string {
    return this.configService.get('PRODUCT_SERVICE_API_PREFIX');
  }
}

import { Provider } from '@nestjs/common';
import { AppConfigService } from './app-config/app-config.service';
import { IAppConfigService } from './app-config/app-config.service.interface';

export { IAppConfigService } from './app-config/app-config.service.interface';
export const serviceProviders: Provider[] = [
  {
    provide: IAppConfigService,
    useClass: AppConfigService,
  },
];

import { Provider } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';

export { IConfigService } from './config/config.service.interface';
export const serviceProviders: Provider[] = [
  {
    provide: IConfigService,
    useClass: ConfigService,
  },
];

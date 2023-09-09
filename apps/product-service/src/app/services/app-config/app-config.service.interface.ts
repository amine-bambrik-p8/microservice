export abstract class IAppConfigService {
  abstract getApiPort(): number;
  abstract getApiPrefix(): string;
}

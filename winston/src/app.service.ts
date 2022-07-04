import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';

@Injectable()
export class AppService {
  @Inject(Logger) 
  private readonly logger: LoggerService;
  // constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) { }

  getHello(): string {
    this.logger.error('level: error');
    this.logger.warn('level: warn');
    this.logger.log('level: log');
    this.logger.verbose('level: verbose');
    this.logger.debug('level: debug');

    return 'Hello World!';
  }
}
import { CallHandler, ExecutionContext, Inject, Injectable, Logger, LoggerService, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  @Inject(Logger) 
  private readonly logger: LoggerService;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { method, url } = context.getArgByIndex(0);
    this.logger.log(`Request to ${method} ${url}`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(data => this.logger.log(`Response from ${method} ${url} time=${Date.now() - now}ms`)),
        map((data)=> ({
          success: true,
          data,
        }))
      );
  }
}
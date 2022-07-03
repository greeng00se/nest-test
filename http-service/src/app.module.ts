import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GooseModule } from './goose/goose.module';

@Module({
  imports: [GooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

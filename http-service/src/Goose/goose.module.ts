import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GooseController } from './goose.controller';
import { GooseService } from './goose.service';

@Module({
  imports: [HttpModule],
  providers: [GooseService],
  controllers: [GooseController]
})
export class GooseModule {}

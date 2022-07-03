import { Controller, Get } from '@nestjs/common';
import { GooseService } from './goose.service';

@Controller('goose')
export class GooseController {
  constructor(
    private readonly gooseService: GooseService
  ) {}

  @Get()
  getGoose() {
    return this.gooseService.call();
  }
  
}

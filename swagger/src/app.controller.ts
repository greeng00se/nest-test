import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { RequestDto } from './dto/ReqeustDto';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ description: 'get Hello' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created '})
  getHello2(@Body() requestDto: RequestDto): RequestDto {
    return requestDto;
  }
}

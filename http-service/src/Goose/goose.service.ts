import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GooseService {
  private readonly URL: string = 'http://localhost:3000/books/'
  
  constructor(
    private readonly httpService: HttpService
  ) {}

  async call(): Promise<string> {
    const apiResult = await firstValueFrom(this.httpService.get(this.URL));
    return apiResult.data;
  }
}

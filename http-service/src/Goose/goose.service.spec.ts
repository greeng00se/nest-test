import { HttpService } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";
import { AxiosResponse } from "axios";
import { of } from "rxjs";
import { GooseService } from "./goose.service";

describe('[GooseService]', () => {
  let sut: GooseService;
  let mockHttpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GooseService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    sut = module.get<GooseService>(GooseService);
    mockHttpService = module.get<HttpService>(HttpService);
  });
  
  it('GooseService', async () => {
    // given
    const data = "hello world!";
    const apiResponse: AxiosResponse<any, any> = {
      data: data,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest.spyOn(mockHttpService, 'get').mockReturnValueOnce(
      of(apiResponse)
    );
    
    // when
    const expected = sut.call();

    // then
    console.log(expected);
  });

})
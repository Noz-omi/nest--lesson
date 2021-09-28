import { Controller, Get, Post } from '@nestjs/common';
import { retry } from 'rxjs';
import { AppService } from './app.service';
import { GetApiDto } from './Dto/get-api.dto';
import { HttpService } from '@nestjs/axios';

@Controller('qiita/items')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}

  @Get()
  findAll(): Observable<AxiosResponse<Cat[]>> {
    return this.httpService.get('https://qiita.com/api/v2/items');
  }
  
  //@Get()
  //getArticle(@Query() getApi: GetApiDto) {
  //  return this.appService.getArticle();
  //}


}

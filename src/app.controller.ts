import { Body, Controller, ForbiddenException, Get, Post, UseFilters } from '@nestjs/common';
import { Observable, retry } from 'rxjs';
import { AppService } from './app.service';
import { GetApiDto } from './Dto/get-api.dto';
import { HttpService } from '@nestjs/axios';
//import { HttpExceptionFilter } from './http-exeption.filter';
import { AxiosResponse } from 'axios';


@Controller('qiita/items')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}

  @Get()
  findAll(): Observable<AxiosResponse> {
    return this.httpService.get('https://qiita.com/api/v2/items');
  }
  
  //@Get()
  //getArticle(@Query() getApi: GetApiDto) {
  //  return this.appService.getArticle();
  //}

  //@Post()
  //@UseFilters(new HttpExceptionFilter()) //@UseFilters(HttpExceptionFilter)でも良い
  //async create(@Body() GetApiDto: GetApiDto) {
  //  throw new ForbiddenException();
  //}

}

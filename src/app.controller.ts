import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { Observable, retry } from 'rxjs';
import { AppService } from './app.service';
import { GetApiDto } from './Dto/get-api.dto';
import { HttpService } from '@nestjs/axios';
import { HttpExceptionFilter } from './http-exeption.filter';
import { AxiosResponse } from 'axios';
import { NotFoundException } from './notfound.exeption';


@Controller('qiita/items')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}


  @Get()
  async pathError() {
    throw new NotFoundException();      //パスが間違ってたときの例外をthrowする
  }

  @Get()
  findAll(): Observable<AxiosResponse> {
    throw new HttpException({　         //標準の例外をthrowする
      status: HttpStatus.FORBIDDEN,
      message: 'リクエストエラー',
      }, HttpStatus.FORBIDDEN);
    return this.httpService.get('https://qiita.com/api/v2/items');
  }

  /* @Get()
  async standardError() {
    throw new HttpException({　         //標準の例外をthrowする
      status: HttpStatus.FORBIDDEN,
      error: 'リクエストエラー',
      }, HttpStatus.FORBIDDEN);
  } */

  /* @Get()
  async pathError() {
    throw new NotFoundException(
      {
        status: HttpStatus.NOT_FOUND,
        error: `リクエストエラー`,
      }
    );      //パスが間違ってたときの例外をthrowする
  } */
  
  //@Get()
  //getArticle(@Query() getApi: GetApiDto) {
  //  return this.appService.getArticle();
  //}

}
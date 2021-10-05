import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, Query, UseFilters } from '@nestjs/common';
import { Observable, retry } from 'rxjs';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { HttpExceptionFilter } from './http-exeption.filter';
import { AxiosResponse } from 'axios';
import { count } from 'console';
import { SystemErrorFilter } from './system-error-filter';


@Controller('qiita')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}

  @Get('items')
  findAll(@Query('count') count: number) {

    if (!count) { 
      count = 1
    }

    if (count　>　10 || count < 0 ) { 
      const ex = new HttpException(
          {
            status: HttpStatus.BAD_REQUEST
          },
          HttpStatus.BAD_REQUEST
        );
      ex.message = 'リクエストエラー'
      throw ex
    }

    return this.appService.findAll(count);



}

}
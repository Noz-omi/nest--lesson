import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, Query, UseFilters } from '@nestjs/common';
import { Observable, retry } from 'rxjs';
import { AppService } from './app.service';
import { GetApiDto } from './Dto/get-api.dto';
import { HttpService } from '@nestjs/axios';
import { HttpExceptionFilter } from './http-exeption.filter';
import { AxiosResponse } from 'axios';
import { NotFoundException } from './notfound.exeption';
import { count } from 'console';
import e from 'express';


@Controller('qiita')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}


  @UseFilters (new HttpExceptionFilter())
  @Get('items')
  findAll(@Query('count') count: number) {

    if (!count) { 
      count = 1
    }

    if (count　>　10 || count < 0 ) { 
      throw new HttpException(
        {status: HttpStatus.BAD_REQUEST},
        HttpStatus.BAD_REQUEST);
    }
    const e = new Error('リクエストエラー');
    console.log(e.message)
  

    return this.appService.findAll(count);



}

}
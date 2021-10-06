import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('qiita')
export class AppController {
  constructor(
    private readonly appService: AppService,
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
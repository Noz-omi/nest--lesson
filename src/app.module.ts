import { HttpException, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { NotFoundException } from './notfound.exeption';

@Module({
  imports: [HttpModule, NotFoundException],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

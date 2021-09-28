import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, HttpService],
})
export class AppModule {}

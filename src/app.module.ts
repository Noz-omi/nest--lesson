import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { QiitaModule } from './qiita/qiita.module';
@Module({
  imports: [HttpModule, QiitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

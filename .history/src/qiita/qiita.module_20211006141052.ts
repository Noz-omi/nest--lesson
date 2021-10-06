import { Module } from '@nestjs/common';
import { QiitaController } from './qiita.controller';
import { QiitaService } from './qiita.service';
import { HttpModule } from '@nestjs/axios';
import { QiitaModule } from './qiita/qiita.module';
@Module({
  imports: [HttpModule, QiitaModule],
  controllers: [QiitaController],
  providers: [QiitaService],
})
export class AppModule {}

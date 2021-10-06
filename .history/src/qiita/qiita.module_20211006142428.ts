import { Module } from '@nestjs/common';
import { QiitaController } from './qiita.controller';
import { QiitaService } from './qiita.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [QiitaController],
  providers: [QiitaService],
  exports: [QiitaService]
})
export class QiitaModule {}

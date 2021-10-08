import { Module } from '@nestjs/common';
import { QiitaController } from './qiita.controller';
import { QiitaService } from './qiita.service';

@Module({
  controllers: [QiitaController],
  providers: [QiitaService]
})
export class QiitaModule {}

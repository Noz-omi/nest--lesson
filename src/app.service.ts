import { Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { GetApiDto } from './Dto/get-api.dto';

@Injectable()
export class AppService {
  results: string[] = [];
  findAll(result): GetApiDto {
    return result
  }

} 

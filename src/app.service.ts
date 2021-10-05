import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { SrvRecord } from 'dns';
import { response } from 'express';
import { elementAt, map, Observable } from 'rxjs';
import { GetApiDto } from './Dto/get-api.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  　findAll(count) {
    const result: Observable<AxiosResponse> = this.httpService.get('aa');
      return result.pipe(map((response) => {
        return response.data　//Qiitaの情報の中から結果だけ取る
      }))
      
      .pipe(map((data) => {

        data.sort(
          function(a,b) {
            return b - a;
          }
        )

        const responses = []
        for (let i = 0; i < count; i++) {　
          const element = {　//elementはいっこの要素のタイトルと作成日時
            title: data[i].title,
            created_at: data[i].created_at
          }
          responses.push(element)　
        }

        const resultObject = {
          results: responses
        }

        return resultObject
      }))

    }

    

} 

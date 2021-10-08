import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { elementAt, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  　findAll(count) {
    const result: Observable<AxiosResponse> = this.httpService.get('https://qiita.com/api/v2/items');
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

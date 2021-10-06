import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { GetApiDto } from './Dto/get-api.dto';

@Injectable()
export class QiitaService {
  constructor(private readonly httpService: HttpService) {}

　findAll(count) {
  const result: Observable<AxiosResponse> = this.httpService.get('https://qiita.com/api/v2/items');
    return result.pipe(map((response) => response.data))
    
    .pipe(map((choicedData) => {

      choicedData.sort((a,b) => {
          return b.created_at < a.created_at;
        }
      )

      const responses = []
      for (let i = 0; i < count; i++) {　
        const element: GetApiDto = {　
          title: choicedData[i].title,
          created_at: choicedData[i].created_at
        }
        responses.push(element)　
      }

      return { results: responses }

    }))
  }
} 

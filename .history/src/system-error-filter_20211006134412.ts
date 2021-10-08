import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    NotFoundException,
  } from '@nestjs/common';
  
  import { Response, Request } from 'express';
  
  /**
   * 共通例外フィルタークラス
   */
  @Catch()
  export class SystemErrorFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      console.error(`エラー => ${exception}`);
  
      const context = host.switchToHttp();
      const response = context.getResponse<Response>();
      const request = context.getResponse<Request>();
 
      let message : string

      if ( exception instanceof NotFoundException ) {
        message = 'リクエストエラー'
      } else if ( exception instanceof HttpException ) {
        message = exception.message
      } else {
        message = 'システムエラー'
      }
  
      response.json({
        path: request.url,
        errors: [{message}]
      });
    }
  }
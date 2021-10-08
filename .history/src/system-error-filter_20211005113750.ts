import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
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
  
      if ( exception instanceof HttpException) {
        exception.getStatus()
      } else  {
        HttpStatus.INTERNAL_SERVER_ERROR
      }

      const message = exception instanceof HttpException

      if ( message ) {
        exception.message
      } else {
        'システムエラー'
      }
  
      response.json({
        path: request.url,
        errors: [{message}]
      });
    }
  }
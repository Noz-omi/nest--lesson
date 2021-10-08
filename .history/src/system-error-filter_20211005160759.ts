import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    NotFoundException,
  } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { strictEqual } from 'assert';
  
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
  
      /* if ( exception instanceof HttpException) {
        exception.getStatus()
      } else  {
        HttpStatus.INTERNAL_SERVER_ERROR
      } */

      let message : string

      if ( exception instanceof HttpException ) {
        message = exception.message
      } else if ( exception instanceof NotFoundException ) {
        message = 'リクエストエラー'
      } else {
        message = 'システムエラー'
      }
  
      response.json({
        path: request.url,
        errors: [{message}]
      });
    }
  }
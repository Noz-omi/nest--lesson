import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor() {
      super('NotFound', HttpStatus.NOT_FOUND);
    }

    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();
    
        response
      }
    }
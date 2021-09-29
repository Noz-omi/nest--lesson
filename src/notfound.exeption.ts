import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor() {
      super('NotFound', HttpStatus.NOT_FOUND);
    }
  }
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ColoredConsoleLogger } from './colored-console.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger;
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);

    this.logger = new ColoredConsoleLogger(LoggerMiddleware.name, true);
    this.logger.colorlog(`${JSON.stringify(req.body)}`);
    next();
  }
}

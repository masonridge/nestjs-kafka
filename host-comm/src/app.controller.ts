import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_divert')
  getDivert(data: any) {
    console.log(`Received get divert ${JSON.stringify(data)}`);

    return this.appService.getDivert(data);
  }
}

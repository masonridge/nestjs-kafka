import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('HOST_COMM_SERVICE') private readonly hostClient: ClientKafka,
  ) {}
  onModuleInit() {
    this.hostClient.subscribeToResponseOf('get_divert');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('label_scanned')
  handleLabelScanned(data: any) {
    this.appService.handleOrderCreated(data);
  }
}

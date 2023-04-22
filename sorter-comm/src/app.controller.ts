import { OnModuleInit } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateScanLabel } from './dto/create-scan-label.dto';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('SORT_ENGINE_SERVICE') private readonly hostClient: ClientKafka,
  ) {}
  onModuleInit() {
    this.hostClient.subscribeToResponseOf('get_dest');
  }

  @Post()
  scanLabel(@Body() createScanLabel: CreateScanLabel) {
    console.log(createScanLabel);

    return this.appService.scanLabel(createScanLabel);
  }
  @Post('divert')
  getDivert(@Body() createScanLabel: CreateScanLabel) {
    console.log(createScanLabel);

    return this.appService.getDivert(createScanLabel);
  }
}

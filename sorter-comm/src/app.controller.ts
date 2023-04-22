import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateScanLabel } from './dto/create-scan-label.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  scanLabel(@Body() createScanLabel: CreateScanLabel) {
    console.log(createScanLabel);

    return this.appService.scanLabel(createScanLabel);
  }
}

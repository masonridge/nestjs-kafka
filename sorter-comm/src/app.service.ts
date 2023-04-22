import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateScanLabel } from './dto/create-scan-label.dto';
import { LabelScannedEvent } from './dto/label-scanned-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('SORT_ENGINE_SERVICE')
    private readonly sortEngineClient: ClientKafka,
  ) {}
  scanLabel({ labelId, sku, scannerId }: CreateScanLabel) {
    this.sortEngineClient.emit(
      'label_scanned',
      new LabelScannedEvent(labelId, sku, scannerId),
    );
  }
  getDivert({ labelId, sku, scannerId }: CreateScanLabel) {
    this.sortEngineClient.send(
      'get_dest',
      new LabelScannedEvent(labelId, sku, scannerId),
    );
  }
}

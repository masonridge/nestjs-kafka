import { Inject, Injectable } from '@nestjs/common';
import { LabelScannedEvent } from './dto/label-scanned-event';
import { ClientKafka } from '@nestjs/microservices';
import { GetDivertRequest } from './dto/get-divert-request';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('HOST_COMM_SERVICE') private readonly hostClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(labelScannedEvent: LabelScannedEvent) {
    console.log('SortEngine:', labelScannedEvent);
    this.hostClient
      .send('get_divert', new GetDivertRequest(labelScannedEvent.labelId))
      .subscribe((dest) => {
        console.log(
          `Got dest ${dest.locationId} from host for label: ${labelScannedEvent.labelId}`,
        );
      });
  }
  async handleGetDest(labelScannedEvent: LabelScannedEvent) {
    console.log('SortEngine GetDest:', labelScannedEvent);
    return await this.hostClient
      .send('get_divert', new GetDivertRequest(labelScannedEvent.labelId))
      .pipe(
        map((dest) => {
          console.log(
            `Got dest ${dest.locationId} from host for label: ${labelScannedEvent.labelId}`,
          );
          return { dest: dest.locationId };
        }),
      );
  }
}

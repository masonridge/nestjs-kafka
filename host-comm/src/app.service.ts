import { Injectable } from '@nestjs/common';
import { GetDivertRequest } from './dto/get-divert-request';

@Injectable()
export class AppService {
  private readonly missions: any[] = [
    {
      labelId: 'LBL001',
      locationId: 'Ship01',
    },
    {
      labelId: 'LBL002',
      locationId: 'Ship02',
    },
    {
      labelId: 'LBL003',
      locationId: 'Ship03',
    },
    {
      labelId: 'LBL004',
      locationId: 'Ship04',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  getDivert(getDivertRequest: GetDivertRequest) {
    return this.missions.find(
      (mission) => mission.labelId === getDivertRequest.labelId,
    );
  }
}

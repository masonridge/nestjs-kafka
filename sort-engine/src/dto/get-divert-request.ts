export class GetDivertRequest {
  constructor(public readonly labelId: string) {}

  toString() {
    return JSON.stringify({
      labelId: this.labelId,
    });
  }
}

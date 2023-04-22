export class LabelScannedEvent {
  constructor(
    public readonly labelId: string,
    public readonly sku: string,
    public readonly scannerId: number,
  ) {}

  toString() {
    return JSON.stringify({
      labelId: this.labelId,
      sku: this.sku,
      scannerId: this.scannerId,
    });
  }
}

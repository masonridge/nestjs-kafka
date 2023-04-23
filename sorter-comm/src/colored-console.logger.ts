import { ConsoleLogger } from '@nestjs/common';

export class ColoredConsoleLogger extends ConsoleLogger {
  private readonly startTime: number;

  constructor(context?: string, isTimestampEnabled?: boolean) {
    super(context, { timestamp: isTimestampEnabled });
    this.startTime = Date.now();
  }

  colorlog(message: any, context?: string) {
    const timestamp = new Date().toISOString();
    const elapsed = (Date.now() - this.startTime).toString().padStart(4, '0');
    super.log(`\x1b[33m${timestamp} [${elapsed}ms] ${message}\x1b[0m`, context);
  }
  // colorlog(message: any, context?: string) {
  //   super.log(`\x1b[33m${message}\x1b[0m`, context);
  // }
}

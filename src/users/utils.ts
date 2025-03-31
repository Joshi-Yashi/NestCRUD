import { randomUUID } from 'crypto';

export class Utils {
  static genId(): string {
    return randomUUID();
  }
}

import { LogLevel } from './log-level.enum';

/**
 * Interface que define a estrutura de uma entrada de log
 */
export interface LogEntry {
  readonly id: string;
  readonly timestamp: Date;
  readonly level: LogLevel;
  readonly message: string;
  readonly source?: string;
  readonly data?: any;
}

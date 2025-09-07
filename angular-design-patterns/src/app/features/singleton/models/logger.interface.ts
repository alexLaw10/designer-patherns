import { LogLevel } from './log-level.enum';
import { LogEntry } from './log-entry.interface';

/**
 * Interface que define o contrato para o Logger
 */
export interface ILogger {
  readonly instanceId: string;
  readonly logs: LogEntry[];
  
  debug(message: string, source?: string, data?: any): void;
  info(message: string, source?: string, data?: any): void;
  warn(message: string, source?: string, data?: any): void;
  error(message: string, source?: string, data?: any): void;
  log(level: LogLevel, message: string, source?: string, data?: any): void;
  clear(): void;
  getLogsByLevel(level: LogLevel): LogEntry[];
  exportLogs(): string;
}

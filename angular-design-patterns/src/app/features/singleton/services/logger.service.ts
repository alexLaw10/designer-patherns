import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogger } from '../models/logger.interface';
import { LogEntry } from '../models/log-entry.interface';
import { LogLevel } from '../models/log-level.enum';

/**
 * Serviço Logger que implementa o Singleton Pattern
 * No Angular, serviços com providedIn: 'root' são singletons por padrão
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {
  private static instance: LoggerService | null = null;
  private readonly _instanceId: string;
  private readonly _logs: LogEntry[] = [];
  private readonly _logsSubject = new BehaviorSubject<LogEntry[]>([]);
  
  public readonly logs$: Observable<LogEntry[]> = this._logsSubject.asObservable();

  private constructor() {
    // Gera um ID único para esta instância
    this._instanceId = this.generateInstanceId();
    console.log(`🔧 LoggerService Singleton criado com ID: ${this._instanceId}`);
  }

  /**
   * Método estático para obter a instância única (padrão Singleton clássico)
   * No Angular, isso é opcional pois o DI já garante a singleton
   */
  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }
    return LoggerService.instance;
  }

  public get instanceId(): string {
    return this._instanceId;
  }

  public get logs(): LogEntry[] {
    return [...this._logs]; // Retorna uma cópia para evitar mutação externa
  }

  public debug(message: string, source?: string, data?: any): void {
    this.log(LogLevel.DEBUG, message, source, data);
  }

  public info(message: string, source?: string, data?: any): void {
    this.log(LogLevel.INFO, message, source, data);
  }

  public warn(message: string, source?: string, data?: any): void {
    this.log(LogLevel.WARN, message, source, data);
  }

  public error(message: string, source?: string, data?: any): void {
    this.log(LogLevel.ERROR, message, source, data);
  }

  public log(level: LogLevel, message: string, source?: string, data?: any): void {
    const logEntry: LogEntry = {
      id: this.generateLogId(),
      timestamp: new Date(),
      level,
      message,
      source,
      data
    };

    this._logs.push(logEntry);
    this._logsSubject.next([...this._logs]);
    
    // Log no console do navegador também
    this.logToConsole(logEntry);
  }

  public clear(): void {
    this._logs.length = 0;
    this._logsSubject.next([]);
    console.log('🧹 Logs limpos');
  }

  public getLogsByLevel(level: LogLevel): LogEntry[] {
    return this._logs.filter(log => log.level === level);
  }

  public exportLogs(): string {
    return JSON.stringify(this._logs, null, 2);
  }

  private generateInstanceId(): string {
    return `logger-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateLogId(): string {
    return `log-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  }

  private logToConsole(logEntry: LogEntry): void {
    const timestamp = logEntry.timestamp.toLocaleTimeString('pt-BR');
    const source = logEntry.source ? `[${logEntry.source}]` : '';
    const message = `${timestamp} ${source} [${logEntry.level}] ${logEntry.message}`;
    
    switch (logEntry.level) {
      case LogLevel.DEBUG:
        console.debug(message, logEntry.data);
        break;
      case LogLevel.INFO:
        console.info(message, logEntry.data);
        break;
      case LogLevel.WARN:
        console.warn(message, logEntry.data);
        break;
      case LogLevel.ERROR:
        console.error(message, logEntry.data);
        break;
    }
  }
}

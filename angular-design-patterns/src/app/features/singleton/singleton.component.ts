import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerService } from './services/logger.service';
import { LogLevel } from './models/log-level.enum';
import { LogEntry } from './models/log-entry.interface';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  
  public logs: LogEntry[] = [];
  public selectedLevel: LogLevel = LogLevel.INFO;
  public newMessage: string = '';
  public newSource: string = '';
  public instanceId: string = '';
  public totalLogs: number = 0;
  public logsByLevel: { [key in LogLevel]: number } = {
    [LogLevel.DEBUG]: 0,
    [LogLevel.INFO]: 0,
    [LogLevel.WARN]: 0,
    [LogLevel.ERROR]: 0
  };

  constructor(private readonly loggerService: LoggerService) {
    this.instanceId = this.loggerService.instanceId;
  }

  public ngOnInit(): void {
    // Subscrever às mudanças nos logs
    this.subscription.add(
      this.loggerService.logs$.subscribe(logs => {
        this.logs = logs;
        this.totalLogs = logs.length;
        this.updateLogsByLevel();
      })
    );

    // Log inicial
    this.loggerService.info('Singleton Component inicializado', 'SingletonComponent');
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.loggerService.info('Singleton Component destruído', 'SingletonComponent');
  }

  public addLog(): void {
    if (this.newMessage.trim()) {
      this.loggerService.log(
        this.selectedLevel,
        this.newMessage,
        this.newSource.trim() || 'User',
        { timestamp: new Date().toISOString() }
      );
      this.newMessage = '';
    }
  }

  public clearLogs(): void {
    this.loggerService.clear();
  }

  public exportLogs(): void {
    const logsJson = this.loggerService.exportLogs();
    const blob = new Blob([logsJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logs-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  public getLogLevelIcon(level: LogLevel): string {
    const icons: { [key in LogLevel]: string } = {
      [LogLevel.DEBUG]: '🐛',
      [LogLevel.INFO]: 'ℹ️',
      [LogLevel.WARN]: '⚠️',
      [LogLevel.ERROR]: '❌'
    };
    return icons[level];
  }

  public getLogLevelColor(level: LogLevel): string {
    const colors: { [key in LogLevel]: string } = {
      [LogLevel.DEBUG]: '#6c757d',
      [LogLevel.INFO]: '#17a2b8',
      [LogLevel.WARN]: '#ffc107',
      [LogLevel.ERROR]: '#dc3545'
    };
    return colors[level];
  }

  public getLogLevels(): LogLevel[] {
    return Object.values(LogLevel);
  }

  public getLogLevelName(level: LogLevel): string {
    return level;
  }

  public addSampleLogs(): void {
    this.loggerService.debug('Debug message', 'Sample', { sample: true });
    this.loggerService.info('Info message', 'Sample', { sample: true });
    this.loggerService.warn('Warning message', 'Sample', { sample: true });
    this.loggerService.error('Error message', 'Sample', { sample: true });
  }

  public addRandomLog(): void {
    const messages = [
      'Usuário fez login',
      'Dados carregados com sucesso',
      'Erro na validação do formulário',
      'Cache atualizado',
      'Requisição HTTP concluída',
      'Componente inicializado',
      'Dados salvos no banco',
      'Erro de conexão com API'
    ];
    
    const sources = [
      'AuthService',
      'DataService',
      'FormComponent',
      'CacheService',
      'HttpClient',
      'AppComponent',
      'DatabaseService',
      'ApiService'
    ];
    
    const levels = Object.values(LogLevel);
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    
    this.loggerService.log(randomLevel, randomMessage, randomSource, {
      random: true,
      timestamp: new Date().toISOString()
    });
  }

  private updateLogsByLevel(): void {
    this.logsByLevel = {
      [LogLevel.DEBUG]: this.loggerService.getLogsByLevel(LogLevel.DEBUG).length,
      [LogLevel.INFO]: this.loggerService.getLogsByLevel(LogLevel.INFO).length,
      [LogLevel.WARN]: this.loggerService.getLogsByLevel(LogLevel.WARN).length,
      [LogLevel.ERROR]: this.loggerService.getLogsByLevel(LogLevel.ERROR).length
    };
  }
}

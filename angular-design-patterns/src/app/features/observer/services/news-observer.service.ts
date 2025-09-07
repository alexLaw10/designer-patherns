import { Observer } from '../models/observer.interface';

/**
 * Implementação do Observer para notícias
 * Representa um observador que recebe notificações de mudanças
 */
export class NewsObserver implements Observer {
  constructor(private readonly _name: string) {}

  private _lastNews?: string;
  private _lastReceivedAt?: Date;

  public update(data: any): void {
    this._lastNews = String(data);
    this._lastReceivedAt = new Date();
    console.log(`${this._name} recebeu: ${data}`);
  }

  public get name(): string {
    return this._name;
  }

  public get lastNews(): string | undefined {
    return this._lastNews;
  }

  public get lastReceivedAt(): Date | undefined {
    return this._lastReceivedAt;
  }
}

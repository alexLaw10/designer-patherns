import { Observer } from '../models/observer.interface';

/**
 * Implementação do Observer para notícias
 * Representa um observador que recebe notificações de mudanças
 */
export class NewsObserver implements Observer {
  constructor(private readonly _name: string) {}

  public update(data: any): void {
    console.log(`${this._name} recebeu: ${data}`);
  }

  public get name(): string {
    return this._name;
  }
}

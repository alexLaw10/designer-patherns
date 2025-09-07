import { Vehicle } from './vehicle.interface';

/**
 * Implementação concreta de um Carro
 */
export class Car implements Vehicle {
  constructor(
    public readonly brand: string,
    public readonly model: string,
    public readonly year: number
  ) {}

  public start(): string {
    return `🚗 ${this.brand} ${this.model} ligou o motor`;
  }

  public stop(): string {
    return `🚗 ${this.brand} ${this.model} desligou o motor`;
  }

  public getInfo(): string {
    return `Carro: ${this.brand} ${this.model} (${this.year})`;
  }
}

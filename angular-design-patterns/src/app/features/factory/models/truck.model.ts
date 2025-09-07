import { Vehicle } from './vehicle.interface';

/**
 * Implementação concreta de um Caminhão
 */
export class Truck implements Vehicle {
  constructor(
    public readonly brand: string,
    public readonly model: string,
    public readonly year: number
  ) {}

  public start(): string {
    return `🚛 ${this.brand} ${this.model} ligou o motor diesel`;
  }

  public stop(): string {
    return `🚛 ${this.brand} ${this.model} desligou o motor diesel`;
  }

  public getInfo(): string {
    return `Caminhão: ${this.brand} ${this.model} (${this.year})`;
  }
}

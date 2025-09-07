/**
 * Interface que define o contrato para veículos
 */
export interface Vehicle {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  start(): string;
  stop(): string;
  getInfo(): string;
}

/**
 * Interface que define o contrato para observadores
 */
export interface Observer {
  update(data: any): void;
}

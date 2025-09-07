/**
 * Interface que define o contrato para café
 */
export interface Coffee {
  getDescription(): string;
  getCost(): number;
  getIngredients(): string[];
}

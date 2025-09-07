import { Coffee } from './coffee.interface';

/**
 * Interface que define o contrato para decorators de café
 */
export interface CoffeeDecorator extends Coffee {
  getDecoratorName(): string;
  getDecoratorCost(): number;
}

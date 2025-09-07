import { Coffee } from '../models/coffee.interface';
import { CoffeeDecorator } from '../models/coffee-decorator.interface';

/**
 * Decorator concreto - Baunilha
 */
export class VanillaDecorator implements CoffeeDecorator {
  constructor(private coffee: Coffee) {}

  public getDescription(): string {
    return this.coffee.getDescription() + ', Baunilha';
  }

  public getCost(): number {
    return this.coffee.getCost() + this.getDecoratorCost();
  }

  public getIngredients(): string[] {
    return [...this.coffee.getIngredients(), 'Extrato de Baunilha'];
  }

  public getDecoratorName(): string {
    return 'Baunilha';
  }

  public getDecoratorCost(): number {
    return 0.80;
  }
}

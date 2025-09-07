import { Coffee } from '../models/coffee.interface';
import { CoffeeDecorator } from '../models/coffee-decorator.interface';

/**
 * Decorator concreto - Açúcar
 */
export class SugarDecorator implements CoffeeDecorator {
  constructor(private coffee: Coffee) {}

  public getDescription(): string {
    return this.coffee.getDescription() + ', Açúcar';
  }

  public getCost(): number {
    return this.coffee.getCost() + this.getDecoratorCost();
  }

  public getIngredients(): string[] {
    return [...this.coffee.getIngredients(), 'Açúcar'];
  }

  public getDecoratorName(): string {
    return 'Açúcar';
  }

  public getDecoratorCost(): number {
    return 0.20;
  }
}

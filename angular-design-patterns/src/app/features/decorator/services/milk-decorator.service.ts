import { Coffee } from '../models/coffee.interface';
import { CoffeeDecorator } from '../models/coffee-decorator.interface';

/**
 * Decorator concreto - Leite
 */
export class MilkDecorator implements CoffeeDecorator {
  constructor(private coffee: Coffee) {}

  public getDescription(): string {
    return this.coffee.getDescription() + ', Leite';
  }

  public getCost(): number {
    return this.coffee.getCost() + this.getDecoratorCost();
  }

  public getIngredients(): string[] {
    return [...this.coffee.getIngredients(), 'Leite'];
  }

  public getDecoratorName(): string {
    return 'Leite';
  }

  public getDecoratorCost(): number {
    return 0.50;
  }
}

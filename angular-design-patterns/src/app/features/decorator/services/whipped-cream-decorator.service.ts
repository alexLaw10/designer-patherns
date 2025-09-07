import { Coffee } from '../models/coffee.interface';
import { CoffeeDecorator } from '../models/coffee-decorator.interface';

/**
 * Decorator concreto - Chantilly
 */
export class WhippedCreamDecorator implements CoffeeDecorator {
  constructor(private coffee: Coffee) {}

  public getDescription(): string {
    return this.coffee.getDescription() + ', Chantilly';
  }

  public getCost(): number {
    return this.coffee.getCost() + this.getDecoratorCost();
  }

  public getIngredients(): string[] {
    return [...this.coffee.getIngredients(), 'Chantilly'];
  }

  public getDecoratorName(): string {
    return 'Chantilly';
  }

  public getDecoratorCost(): number {
    return 0.60;
  }
}

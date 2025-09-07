import { Coffee } from '../models/coffee.interface';
import { CoffeeDecorator } from '../models/coffee-decorator.interface';

/**
 * Decorator concreto - Caramelo
 */
export class CaramelDecorator implements CoffeeDecorator {
  constructor(private coffee: Coffee) {}

  public getDescription(): string {
    return this.coffee.getDescription() + ', Caramelo';
  }

  public getCost(): number {
    return this.coffee.getCost() + this.getDecoratorCost();
  }

  public getIngredients(): string[] {
    return [...this.coffee.getIngredients(), 'Xarope de Caramelo'];
  }

  public getDecoratorName(): string {
    return 'Caramelo';
  }

  public getDecoratorCost(): number {
    return 0.70;
  }
}

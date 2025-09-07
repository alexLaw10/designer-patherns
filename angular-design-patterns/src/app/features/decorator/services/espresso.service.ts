import { Coffee } from '../models/coffee.interface';

/**
 * Componente concreto - Espresso
 */
export class Espresso implements Coffee {
  public getDescription(): string {
    return 'Espresso';
  }

  public getCost(): number {
    return 2.50;
  }

  public getIngredients(): string[] {
    return ['Café moído', 'Água quente'];
  }
}

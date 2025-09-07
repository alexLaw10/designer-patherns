import { Coffee } from '../models/coffee.interface';

/**
 * Componente concreto - Americano
 */
export class Americano implements Coffee {
  public getDescription(): string {
    return 'Americano';
  }

  public getCost(): number {
    return 2.80;
  }

  public getIngredients(): string[] {
    return ['Espresso', 'Água quente'];
  }
}

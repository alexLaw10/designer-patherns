import { Coffee } from '../models/coffee.interface';

/**
 * Componente concreto - Latte
 */
export class Latte implements Coffee {
  public getDescription(): string {
    return 'Latte';
  }

  public getCost(): number {
    return 3.50;
  }

  public getIngredients(): string[] {
    return ['Espresso', 'Leite vaporizado', 'Espuma de leite'];
  }
}

import { Coffee } from '../models/coffee.interface';

/**
 * Componente concreto - Cappuccino
 */
export class Cappuccino implements Coffee {
  public getDescription(): string {
    return 'Cappuccino';
  }

  public getCost(): number {
    return 3.00;
  }

  public getIngredients(): string[] {
    return ['Espresso', 'Leite vaporizado', 'Espuma de leite', 'Chocolate em pó'];
  }
}

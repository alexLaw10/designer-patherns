import { Component, OnInit } from '@angular/core';
import { Coffee } from './models/coffee.interface';
import { Espresso } from './services/espresso.service';
import { Latte } from './services/latte.service';
import { Cappuccino } from './services/cappuccino.service';
import { Americano } from './services/americano.service';
import { MilkDecorator } from './services/milk-decorator.service';
import { SugarDecorator } from './services/sugar-decorator.service';
import { VanillaDecorator } from './services/vanilla-decorator.service';
import { CaramelDecorator } from './services/caramel-decorator.service';
import { WhippedCreamDecorator } from './services/whipped-cream-decorator.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  public selectedCoffee: string = 'espresso';
  public selectedDecorators: string[] = [];
  public currentCoffee: Coffee | null = null;
  public coffeeHistory: string[] = [];

  public readonly availableCoffees = [
    { value: 'espresso', label: '☕ Espresso', icon: '☕', cost: 2.50 },
    { value: 'latte', label: '🥛 Latte', icon: '🥛', cost: 3.50 },
    { value: 'cappuccino', label: '🍫 Cappuccino', icon: '🍫', cost: 3.00 },
    { value: 'americano', label: '🇺🇸 Americano', icon: '🇺🇸', cost: 2.80 }
  ];

  public readonly availableDecorators = [
    { value: 'milk', label: '🥛 Leite', icon: '🥛', cost: 0.50 },
    { value: 'sugar', label: '🍯 Açúcar', icon: '🍯', cost: 0.20 },
    { value: 'vanilla', label: '🌿 Baunilha', icon: '🌿', cost: 0.80 },
    { value: 'caramel', label: '🍮 Caramelo', icon: '🍮', cost: 0.70 },
    { value: 'whipped-cream', label: '💨 Chantilly', icon: '💨', cost: 0.60 }
  ];

  public ngOnInit(): void {
    this.createCoffee();
  }

  public createCoffee(): void {
    // Criar café base
    let coffee: Coffee;
    
    switch (this.selectedCoffee) {
      case 'espresso':
        coffee = new Espresso();
        break;
      case 'latte':
        coffee = new Latte();
        break;
      case 'cappuccino':
        coffee = new Cappuccino();
        break;
      case 'americano':
        coffee = new Americano();
        break;
      default:
        coffee = new Espresso();
    }

    // Aplicar decorators
    this.selectedDecorators.forEach(decoratorType => {
      switch (decoratorType) {
        case 'milk':
          coffee = new MilkDecorator(coffee);
          break;
        case 'sugar':
          coffee = new SugarDecorator(coffee);
          break;
        case 'vanilla':
          coffee = new VanillaDecorator(coffee);
          break;
        case 'caramel':
          coffee = new CaramelDecorator(coffee);
          break;
        case 'whipped-cream':
          coffee = new WhippedCreamDecorator(coffee);
          break;
      }
    });

    this.currentCoffee = coffee;
  }

  public toggleDecorator(decoratorType: string): void {
    const index = this.selectedDecorators.indexOf(decoratorType);
    if (index > -1) {
      this.selectedDecorators.splice(index, 1);
    } else {
      this.selectedDecorators.push(decoratorType);
    }
    this.createCoffee();
  }

  public addToHistory(): void {
    if (this.currentCoffee) {
      const historyEntry = `[${this.getCurrentTime()}] ${this.currentCoffee.getDescription()} - R$ ${this.currentCoffee.getCost().toFixed(2)}`;
      this.coffeeHistory.unshift(historyEntry);
      
      // Manter apenas os últimos 10 cafés
      if (this.coffeeHistory.length > 10) {
        this.coffeeHistory.pop();
      }
    }
  }

  public clearHistory(): void {
    this.coffeeHistory = [];
  }

  public resetCoffee(): void {
    this.selectedDecorators = [];
    this.createCoffee();
  }

  public getCurrentTime(): string {
    return new Date().toLocaleTimeString('pt-BR');
  }

  public getCoffeeIcon(coffeeType: string): string {
    const coffee = this.availableCoffees.find(c => c.value === coffeeType);
    return coffee ? coffee.icon : '☕';
  }

  public getCoffeeLabel(coffeeType: string): string {
    const coffee = this.availableCoffees.find(c => c.value === coffeeType);
    return coffee ? coffee.label : 'Café Desconhecido';
  }

  public getDecoratorIcon(decoratorType: string): string {
    const decorator = this.availableDecorators.find(d => d.value === decoratorType);
    return decorator ? decorator.icon : '❓';
  }

  public getDecoratorLabel(decoratorType: string): string {
    const decorator = this.availableDecorators.find(d => d.value === decoratorType);
    return decorator ? decorator.label : 'Decorator Desconhecido';
  }

  public getDecoratorCost(decoratorType: string): number {
    const decorator = this.availableDecorators.find(d => d.value === decoratorType);
    return decorator ? decorator.cost : 0;
  }

  public isDecoratorSelected(decoratorType: string): boolean {
    return this.selectedDecorators.includes(decoratorType);
  }
}

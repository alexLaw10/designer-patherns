import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public readonly menuItems: MenuItem[] = [
    {
      id: 'observer',
      title: 'Observer',
      description: 'Padrão para notificação de mudanças de estado usando RxJS',
      route: '/patterns/observer',
      isImplemented: true
    },
    {
      id: 'factory',
      title: 'Factory',
      description: 'Padrão para criação de objetos sem especificar suas classes',
      route: '/patterns/factory',
      isImplemented: true
    },
    {
      id: 'singleton',
      title: 'Singleton',
      description: 'Padrão que garante uma única instância de uma classe',
      route: '/patterns/singleton',
      isImplemented: true
    },
    {
      id: 'strategy',
      title: 'Strategy',
      description: 'Padrão para definir algoritmos intercambiáveis em tempo de execução',
      route: '/patterns/strategy',
      isImplemented: true
    },
    {
      id: 'decorator',
      title: 'Decorator',
      description: 'Padrão para adicionar comportamentos a objetos dinamicamente',
      route: '/patterns/decorator',
      isImplemented: true
    }
  ];

  public isMobileMenuOpen = false;

  constructor() {}

  public ngOnInit(): void {
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  public getPatternIcon(patternId: string): string {
    const icons: { [key: string]: string } = {
      'observer': '👁️',
      'factory': '🏭',
      'singleton': '🔒',
      'strategy': '⚡',
      'decorator': '🎨'
    };
    return icons[patternId] || '📋';
  }
}

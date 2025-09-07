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
      description: 'Realizando estudos de casos para demonstração e implementação',
      route: '#',
      isImplemented: false
    },
    {
      id: 'strategy',
      title: 'Strategy',
      description: 'Realizando estudos de casos para demonstração e implementação',
      route: '#',
      isImplemented: false
    },
    {
      id: 'decorator',
      title: 'Decorator',
      description: 'Realizando estudos de casos para demonstração e implementação',
      route: '#',
      isImplemented: false
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public readonly welcomeMessage = 'Bem-vindo ao Demo de Design Patterns!';
  public readonly description = 'Selecione um design pattern no menu acima para ver a demonstração interativa.';
}

import { Component, OnInit } from '@angular/core';
import { PaymentContextService } from './services/payment-context.service';
import { CreditCardStrategy } from './services/credit-card-strategy.service';
import { PixStrategy } from './services/pix-strategy.service';
import { BankTransferStrategy } from './services/bank-transfer-strategy.service';
import { PayPalStrategy } from './services/paypal-strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  public selectedStrategy: string = 'credit-card';
  public amount: number = 100;
  public paymentResult: string = '';
  public paymentHistory: string[] = [];
  
  // Dados para as estratégias
  public creditCardData = {
    cardNumber: '1234567890123456',
    cardHolder: 'João Silva'
  };
  
  public pixData = {
    pixKey: 'joao.silva@email.com'
  };
  
  public bankTransferData = {
    bankCode: '001',
    accountNumber: '1234567890'
  };
  
  public paypalData = {
    email: 'joao.silva@paypal.com'
  };

  public readonly availableStrategies = [
    { value: 'credit-card', label: '💳 Cartão de Crédito', icon: '💳' },
    { value: 'pix', label: '📱 PIX', icon: '📱' },
    { value: 'bank-transfer', label: '🏦 Transferência Bancária', icon: '🏦' },
    { value: 'paypal', label: '🌐 PayPal', icon: '🌐' }
  ];

  constructor(private paymentContext: PaymentContextService) {}

  public ngOnInit(): void {
    this.setStrategy();
  }

  public setStrategy(): void {
    let strategy;
    
    switch (this.selectedStrategy) {
      case 'credit-card':
        strategy = new CreditCardStrategy(
          this.creditCardData.cardNumber,
          this.creditCardData.cardHolder
        );
        break;
      case 'pix':
        strategy = new PixStrategy(this.pixData.pixKey);
        break;
      case 'bank-transfer':
        strategy = new BankTransferStrategy(
          this.bankTransferData.bankCode,
          this.bankTransferData.accountNumber
        );
        break;
      case 'paypal':
        strategy = new PayPalStrategy(this.paypalData.email);
        break;
      default:
        throw new Error('Estratégia não suportada');
    }
    
    this.paymentContext.setStrategy(strategy);
  }

  public processPayment(): void {
    try {
      const result = this.paymentContext.processPayment(this.amount);
      this.paymentResult = result;
      this.paymentHistory.unshift(`[${this.getCurrentTime()}] ${result}`);
      
      // Manter apenas os últimos 10 pagamentos
      if (this.paymentHistory.length > 10) {
        this.paymentHistory.pop();
      }
    } catch (error) {
      this.paymentResult = `❌ Erro: ${error}`;
    }
  }

  public clearHistory(): void {
    this.paymentHistory = [];
    this.paymentResult = '';
  }

  public getCurrentStrategyInfo(): string {
    const currentStrategy = this.paymentContext.getCurrentStrategy();
    if (!currentStrategy) {
      return 'Nenhuma estratégia selecionada';
    }
    return `${currentStrategy.getStrategyName()}: ${currentStrategy.getDescription()}`;
  }

  public getCurrentTime(): string {
    return new Date().toLocaleTimeString('pt-BR');
  }

  public getStrategyIcon(strategyType: string): string {
    const strategy = this.availableStrategies.find(s => s.value === strategyType);
    return strategy ? strategy.icon : '❓';
  }

  public getStrategyLabel(strategyType: string): string {
    const strategy = this.availableStrategies.find(s => s.value === strategyType);
    return strategy ? strategy.label : 'Estratégia Desconhecida';
  }
}

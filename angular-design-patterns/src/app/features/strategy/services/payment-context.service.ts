import { Injectable } from '@angular/core';
import { PaymentStrategy } from '../models/payment-strategy.interface';
import { PaymentContext } from '../models/payment-context.interface';

/**
 * Contexto que utiliza estratégias de pagamento
 * Implementa o Strategy Pattern
 */
@Injectable({
  providedIn: 'root'
})
export class PaymentContextService implements PaymentContext {
  private currentStrategy: PaymentStrategy | null = null;

  public setStrategy(strategy: PaymentStrategy): void {
    this.currentStrategy = strategy;
  }

  public processPayment(amount: number): string {
    if (!this.currentStrategy) {
      throw new Error('Nenhuma estratégia de pagamento foi definida');
    }
    return this.currentStrategy.processPayment(amount);
  }

  public getCurrentStrategy(): PaymentStrategy | null {
    return this.currentStrategy;
  }

  public getAvailableStrategies(): string[] {
    return ['credit-card', 'pix', 'bank-transfer', 'paypal'];
  }

  public getStrategyDescription(strategyType: string): string {
    const descriptions: { [key: string]: string } = {
      'credit-card': 'Pagamento via cartão de crédito com validação e autorização',
      'pix': 'Pagamento instantâneo via PIX com transferência imediata',
      'bank-transfer': 'Transferência bancária tradicional (até 1 dia útil)',
      'paypal': 'Pagamento internacional via PayPal com proteção'
    };
    return descriptions[strategyType] || 'Estratégia não encontrada';
  }
}

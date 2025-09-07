import { PaymentStrategy } from '../models/payment-strategy.interface';

/**
 * Estratégia concreta para pagamento com cartão de crédito
 */
export class CreditCardStrategy implements PaymentStrategy {
  private readonly cardNumber: string;
  private readonly cardHolder: string;

  constructor(cardNumber: string, cardHolder: string) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
  }

  public processPayment(amount: number): string {
    const maskedCard = this.maskCardNumber(this.cardNumber);
    return `💳 Pagamento de R$ ${amount.toFixed(2)} processado com cartão de crédito ${maskedCard} (${this.cardHolder})`;
  }

  public getStrategyName(): string {
    return 'Cartão de Crédito';
  }

  public getDescription(): string {
    return 'Pagamento processado via cartão de crédito com validação e autorização';
  }

  private maskCardNumber(cardNumber: string): string {
    if (cardNumber.length < 4) return cardNumber;
    return '**** **** **** ' + cardNumber.slice(-4);
  }
}

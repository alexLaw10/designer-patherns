import { PaymentStrategy } from '../models/payment-strategy.interface';

/**
 * Estratégia concreta para pagamento via PayPal
 */
export class PayPalStrategy implements PaymentStrategy {
  private readonly email: string;

  constructor(email: string) {
    this.email = email;
  }

  public processPayment(amount: number): string {
    const maskedEmail = this.maskEmail(this.email);
    return `🌐 Pagamento de R$ ${amount.toFixed(2)} processado via PayPal (${maskedEmail})`;
  }

  public getStrategyName(): string {
    return 'PayPal';
  }

  public getDescription(): string {
    return 'Pagamento internacional via PayPal com proteção do comprador';
  }

  private maskEmail(email: string): string {
    const [username, domain] = email.split('@');
    if (username.length < 3) return email;
    return username.slice(0, 2) + '***@' + domain;
  }
}
